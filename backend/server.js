import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });

async function extractTextFromPDFBuffer(buffer) {
  // Notice the .default here
  const loadingTask = pdfjsLib.default.getDocument({ data: buffer, useWorker: false });
  const pdfDocument = await loadingTask.promise;
  let fullText = "";

  for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
    const page = await pdfDocument.getPage(pageNum);
    const content = await page.getTextContent();
    const strings = content.items.map(item => item.str);
    fullText += strings.join(" ") + "\n\n";
  }
  return fullText;
}

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ ok: false, error: "No file uploaded" });
    }

    const text = await extractTextFromPDFBuffer(req.file.buffer);
    if (!text || text.trim().length === 0) {
      return res.status(400).json({ ok: false, error: "Empty PDF or no extractable text" });
    }

    res.json({ ok: true, text: text.slice(0, 1000) });
  } catch (err) {
    console.error("Error parsing PDF:", err);
    res.status(500).json({ ok: false, error: "Failed to parse PDF", details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
