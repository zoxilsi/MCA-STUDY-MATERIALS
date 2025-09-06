// generateDriveFiles.js
// This file is to read directly from google drive and generate `Data.js` file (with downloadable links) containing the folder structure and PDF metadata (size, pages).
// How to run: node generateDriveFiles.js
// The script will create/update `Data.js` in the current directory.
// Make sure you have a service account JSON key file named 'service-account.json' in the project root.

import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';
import fetch from 'node-fetch';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

// config
const SERVICE_ACCOUNT_FILE = path.join(process.cwd(), 'service-account.json'); // your JSON key
const DRIVE_ROOT_FOLDER_ID = '1FejtAruxyLb8Dj7VZJTZnoGvXTpeNERS';
const OUTPUT_JS = path.join(process.cwd(), 'Data.js');

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119 Safari/537.36';
const toMB = (bytes) => (bytes / (1024 * 1024)).toFixed(2);

// auth with service account
const auth = new google.auth.GoogleAuth({
  keyFile: SERVICE_ACCOUNT_FILE,
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});
const drive = google.drive({ version: 'v3', auth });

// List all files in a folder
async function listFiles(folderId) {
  const files = [];
  let pageToken = null;

  do {
    const res = await drive.files.list({
      q: `'${folderId}' in parents and trashed=false`,
      fields: 'nextPageToken, files(id, name, mimeType)',
      pageToken,
    });
    files.push(...res.data.files);
    pageToken = res.data.nextPageToken;
  } while (pageToken);

  return files;
}

// Fetch PDF and return buffer for pdfjs
async function fetchDrivePdf(url) {
  const res = await fetch(url, {
    redirect: 'follow',
    headers: { 'user-agent': UA, accept: '*/*' },
  });
  const buffer = await res.arrayBuffer();
  return buffer;
}

// Get PDF size and number of pages
async function getPdfMeta(url) {
  try {
    const buffer = await fetchDrivePdf(url);
    const pdf = await pdfjsLib.getDocument({ data: buffer, disableWorker: true }).promise;
    const size = `${toMB(buffer.byteLength)} MB`;
    return { size, pages: pdf.numPages };
  } catch (err) {
    console.error(`❌ PDF meta error for ${url}: ${err.message}`);
    return { size: 'Unknown', pages: 'Unknown' };
  }
}

// Build hierarchy recursively and add PDF metadata
async function buildHierarchy(folderId) {
  const hierarchy = {};
  const items = await listFiles(folderId);

  for (const item of items) {
    if (item.mimeType === 'application/vnd.google-apps.folder') {
      hierarchy[item.name] = await buildHierarchy(item.id);
    } else {
      const link = `https://drive.google.com/uc?export=download&id=${item.id}`;
      const meta = await getPdfMeta(link);
      hierarchy[item.name] = { link, id: item.id, size: meta.size, pages: meta.pages };
    }
  }

  return hierarchy;
}

// ---- main ----
(async () => {
  try {
    console.log('📂 Reading Google Drive folder hierarchy with PDF metadata...');
    const result = await buildHierarchy(DRIVE_ROOT_FOLDER_ID);

    const jsContent = `export const filesData = ${JSON.stringify(result, null, 2)};`;
    fs.writeFileSync(OUTPUT_JS, jsContent);

    console.log(`✅ Data.js generated successfully at ${OUTPUT_JS}`);
  } catch (err) {
    console.error('❌ Error generating Data.js:', err);
  }
})();
