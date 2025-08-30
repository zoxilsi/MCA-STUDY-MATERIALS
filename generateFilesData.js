// generateFilesData.js
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import fetch from 'node-fetch';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs'; // legacy build for Node

// ---- config ----
const inputCSV = path.join(process.cwd(), 'notes.csv');
const outputJS = path.join(process.cwd(), 'filesData.js');

// ---- utils ----
const result = {};
const toMB = (bytes) => (bytes / (1024 * 1024)).toFixed(2);

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119 Safari/537.36';

function headersToCookieString(headers) {
  // node-fetch v3: headers.raw() exists. Fallback to single header if needed.
  const raw = typeof headers.raw === 'function' ? headers.raw() : null;
  const setCookies = raw?.['set-cookie'] ?? [];
  if (setCookies.length) {
    return setCookies
      .map((c) => c.split(';')[0])
      .filter(Boolean)
      .join('; ');
  }
  const single = headers.get('set-cookie');
  return single ? single.split(';')[0] : '';
}

function extractDriveFileId(link) {
  if (!link) return null;
  // 1) /file/d/FILEID/view
  const m1 = link.match(/\/d\/([^/]+)\//);
  if (m1) return m1[1];
  // 2) ?id=FILEID
  const m2 = link.match(/[?&]id=([^&]+)/);
  if (m2) return m2[1];
  // 3) share links sometimes end without trailing slash
  const m3 = link.match(/\/d\/([^/?#]+)$/);
  if (m3) return m3[1];
  return null;
}

// ---- Drive fetch that handles confirm page / large file interstitial ----
// Returns { buffer:ArrayBuffer, headers:Headers, contentType:string }
async function fetchDrivePdf(url) {
  // 1st attempt (may return an HTML interstitial)
  const res1 = await fetch(url, {
    redirect: 'follow',
    headers: { 'user-agent': UA, accept: '*/*' },
  });

  const ct1 = (res1.headers.get('content-type') || '').toLowerCase();
  const cookie1 = headersToCookieString(res1.headers);
  const buf1 = await res1.arrayBuffer();

  const disp1 = (res1.headers.get('content-disposition') || '').toLowerCase();
  const isFile1 =
    ct1.includes('application/pdf') ||
    ct1.includes('application/octet-stream') ||
    ct1.includes('binary/octet-stream') ||
    disp1.includes('attachment');

  if (isFile1) {
    return { buffer: buf1, headers: res1.headers, contentType: ct1 };
  }

  // Parse HTML to find confirm token or direct href
  const html = new TextDecoder().decode(buf1);

  // <a id="uc-download-link" href="...">
  let href = null;
  const mAnchor = html.match(/id="uc-download-link"[^>]*\shref="([^"]+)"/i);
  if (mAnchor) href = mAnchor[1];

  // hidden input confirm token
  let confirmToken = null;
  const mHidden = html.match(/name="confirm"\s+value="([^"]+)"/i);
  if (mHidden) confirmToken = mHidden[1];

  // any confirm=... seen in html
  if (!confirmToken) {
    const mAny = html.match(/confirm=([0-9A-Za-z_\-]+)[&"]/);
    if (mAny) confirmToken = mAny[1];
  }

  // Build confirm URL
  let confirmUrl;
  if (href) {
    confirmUrl = href.startsWith('http')
      ? href
      : `https://drive.google.com${href}`;
  } else if (confirmToken) {
    const hasConfirm = /[?&]confirm=/.test(url);
    confirmUrl = hasConfirm
      ? url
      : `${url}${url.includes('?') ? '&' : '?'}confirm=${confirmToken}`;
  } else {
    // try usercontent host
    const fileId = (url.match(/[?&]id=([^&]+)/) || [])[1];
    if (!fileId) {
      return { buffer: buf1, headers: res1.headers, contentType: ct1 };
    }
    confirmUrl = `https://drive.usercontent.google.com/download?id=${fileId}&export=download`;
  }

  // 2nd attempt with cookies
  const res2 = await fetch(confirmUrl, {
    redirect: 'follow',
    headers: {
      'user-agent': UA,
      accept: '*/*',
      ...(cookie1 ? { cookie: cookie1 } : {}),
    },
  });

  const ct2 = (res2.headers.get('content-type') || '').toLowerCase();
  const buf2 = await res2.arrayBuffer();

  return { buffer: buf2, headers: res2.headers, contentType: ct2 };
}

async function getPdfMeta(url) {
  try {
    const { buffer, headers, contentType } = await fetchDrivePdf(url);

    const ct = (contentType || headers.get('content-type') || '').toLowerCase();
    const disp = (headers.get('content-disposition') || '').toLowerCase();

    const isFile =
      ct.includes('application/pdf') ||
      ct.includes('application/octet-stream') ||
      ct.includes('binary/octet-stream') ||
      disp.includes('attachment');

    if (!isFile) {
      throw new Error(`Not a PDF (content-type: ${ct || 'unknown'})`);
    }

    const headerBytes = Number(headers.get('content-length') || 0);
    const byteLength = headerBytes > 0 ? headerBytes : buffer.byteLength;

    const pdf = await pdfjsLib.getDocument({
      data: buffer,
      disableWorker: true, // important in Node
    }).promise;

    return {
      size: `${toMB(byteLength)} MB`,
      pages: pdf.numPages,
    };
  } catch (err) {
    console.error(`❌ PDF meta error for ${url}: ${err.message}`);
    return { size: 'Unknown', pages: 'Unknown' };
  }
}

// ---- main ----
const rows = [];
fs.createReadStream(inputCSV)
  .pipe(csv())
  .on('data', (row) => rows.push(row))
  .on('end', async () => {
    for (const row of rows) {
      const { semester, course_code, subject, module, part, link } = row;
      if (!link) continue;

      const fileId = extractDriveFileId(link);
      if (!fileId) continue;

      // Prefer the official uc download endpoint
      const directLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

      const sKey = `semester${semester}`;
      result[sKey] ??= {};
      result[sKey][course_code] ??= {};
      result[sKey][course_code][subject] ??= {};
      result[sKey][course_code][subject][module] ??= {};

      const meta = await getPdfMeta(directLink);

      result[sKey][course_code][subject][module][part] = {
        link: directLink,
        size: meta.size,
        pages: meta.pages,
      };
    }

    const jsContent = `export const filesData = ${JSON.stringify(result, null, 2)};`;
    fs.writeFileSync(outputJS, jsContent);
    console.log('✅ filesData.js generated successfully!');
  });
