const express = require("express");
const cors = require("cors");
const puppeteer = require("puppeteer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate-pdf", async (req, res) => {
  const resume = req.body;

  const html = `
    <html>
      <head>
        <style>
          body { font-family: Arial; padding: 40px; }
          h1 { color: #2c3e50; }
        </style>
      </head>
      <body>
        <h1>${resume.personal.name}</h1>
        <p>${resume.personal.email} | ${resume.personal.phone}</p>

        <h2>Education</h2>
        ${resume.education
          .map(
            (e) =>
              `<p><strong>${e.degree}</strong> - ${e.institution} (${e.year})</p>`
          )
          .join("")}

        <h2>Experience</h2>
        ${resume.experience
          .map(
            (e) =>
              `<p><strong>${e.role}</strong> - ${e.company} (${e.duration})</p>`
          )
          .join("")}
      </body>
    </html>
  `;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);
  const pdf = await page.pdf({ format: "A4" });

  await browser.close();

  res.set({
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment; filename=resume.pdf"
  });

  res.send(pdf);
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});

