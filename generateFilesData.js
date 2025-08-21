import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

const inputCSV = path.join(process.cwd(), 'notes.csv');
const outputJS = path.join(process.cwd(), 'filesData.js');

const result = {};

fs.createReadStream(inputCSV)
  .pipe(csv())
  .on('data', (row) => {
    const { semester, course_code, subject, module, part, link } = row;
    if (!link) {  //this will allow code to not crash if csv rows empty sometimes
    console.warn(`⚠️ Missing link for ${course_code} module ${module} part ${part}`);
    return; 
  }

    // Extract FILE_ID from Google Drive link
    const fileIdMatch = link.match(/\/d\/(.+?)\//);
    const fileId = fileIdMatch ? fileIdMatch[1] : null;
    if (!fileId) return;

    const directLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Ensure semester object
    const semesterKey = `semester${semester}`;
    if (!result[semesterKey]) {
      result[semesterKey] = {};
    }

    // Ensure course object
    if (!result[semesterKey][course_code]) {
      result[semesterKey][course_code] = {};
    }

    // Ensure subject object
    if (!result[semesterKey][course_code][subject]) {
      result[semesterKey][course_code][subject] = {};
    }

    // Ensure module object
    if (!result[semesterKey][course_code][subject][module]) {
      result[semesterKey][course_code][subject][module] = {};
    }

    // Add part link
    result[semesterKey][course_code][subject][module][part] = directLink;
  })
  .on('end', () => {
    const jsContent = `export const filesData = ${JSON.stringify(result, null, 2)};`;
    fs.writeFileSync(outputJS, jsContent);
    console.log(`✅ filesData.js generated successfully!`);
  });
