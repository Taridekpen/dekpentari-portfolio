import { createWriteStream, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = path.join(root, "public", "Dekpen-Tari-Resume.pdf");

const ink = "#0f172a";
const muted = "#475569";
const cyan = "#0891b2";
const left = 54;
const right = 558;

const experience = [
  {
    role: "Programming Tutor",
    company: "Golden Viosam Nig Ltd",
    years: "2017–2024",
    line: "Taught programming.",
  },
  {
    role: "Project Supervisor",
    company: "Golden Viosam Nig Ltd",
    years: "2017–2023",
    line: "Supervised projects.",
  },
  {
    role: "Blockchain Lead",
    company: "Incrypto Encrypted",
    years: "2021–2023",
    line: "Led blockchain work.",
  },
  {
    role: "Secretary",
    company: "Elohim Microfinance Bank",
    years: "2018",
    line: "Served as secretary.",
  },
  {
    role: "Accountant / Tutor",
    company: "Lostcodes Technologies",
    years: "2017",
    line: "Handled accounting and tutoring.",
  },
  {
    role: "Project Supervisor / Manager",
    company: "Lostcodes Technologies",
    years: "2016–2017",
    line: "Supervised and managed projects.",
  },
];

const education = [
  {
    qualification: "National Diploma, Accounting",
    school: "Bayelsa State College of Art and Science",
    years: "2015–2018",
  },
  {
    qualification: "B.Sc Accounting",
    school: "Federal University Otuoke",
    years: "2019–2024",
  },
  {
    qualification: "Certificate of Completion, Web Development",
    school: "Young Innovators of Nigeria (YIN)",
    years: null,
  },
];

const projects = [
  {
    name: "Stackslads",
    detail: "Skill-based multiplayer PvP on Stacks. Phaser, TypeScript, Node.js, Colyseus, MongoDB, and Clarity.",
    url: "https://stackslads-client.vercel.app",
  },
  {
    name: "Golden Viosam website",
    detail: "Client website.",
    url: "https://goldenviosam.com",
  },
  {
    name: "Hybrid Insurance Broker",
    detail: "Client website.",
    url: "https://www.hybridbrokersng.com/",
  },
  {
    name: "First Ocean Supermarket",
    detail: "Client project.",
    url: null,
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "Rust",
  "PHP",
  "C#",
  "Node.js",
  "Next.js",
  "React",
  "NestJS",
  "MongoDB",
  "Supabase",
  "Clarity",
  "Phaser",
  "Colyseus",
];

mkdirSync(path.dirname(outputPath), { recursive: true });

const doc = new PDFDocument({
  size: "LETTER",
  margins: { top: 48, bottom: 48, left, right: 54 },
});

doc.pipe(createWriteStream(outputPath));

function ensureSpace(height) {
  if (doc.y + height > doc.page.height - 48) {
    doc.addPage();
  }
}

function section(title) {
  ensureSpace(36);
  doc.moveDown(0.7);
  doc.fillColor(cyan).font("Helvetica-Bold").fontSize(11).text(title.toUpperCase(), left);
  const ruleY = doc.y + 3;
  doc
    .moveTo(left, ruleY)
    .lineTo(right, ruleY)
    .strokeColor(cyan)
    .lineWidth(1)
    .stroke();
  doc.y = ruleY + 10;
  doc.fillColor(ink);
}

doc.fillColor(ink).font("Helvetica-Bold").fontSize(22).text("Dekpen Tari", left);
doc.fillColor(cyan).font("Helvetica").fontSize(11).text("Full Stack Web Developer");
doc.fillColor(muted).fontSize(9).text("Nigeria");
doc.moveDown(0.35);
doc
  .fillColor(ink)
  .fontSize(9)
  .text(
    "dekpent@gmail.com   ·   WhatsApp +234 904 612 1486   ·   x.com/tari_btc   ·   github.com/Taridekpen",
    { width: right - left },
  );

section("Summary");
doc.font("Helvetica").fontSize(10).fillColor(ink).text(
  "Full stack web developer, Web3 builder, and educator. I create products, teach developers, contribute to blockchain ecosystems, and turn ideas into working products. Current focus includes Stackslads, a skill-based multiplayer game on Stacks. More than 10 years coding and more than 7 years teaching, from Nigeria.",
  { width: right - left, lineGap: 2 },
);

section("Skills");
doc.font("Helvetica").fontSize(10).fillColor(ink).text(skills.join("   ·   "), {
  width: right - left,
  lineGap: 2,
});

section("Experience");
for (const item of experience) {
  ensureSpace(42);
  const rowY = doc.y;
  doc.font("Helvetica-Bold").fontSize(11).fillColor(ink).text(item.role, left, rowY, {
    width: 360,
  });
  doc.font("Helvetica").fontSize(9).fillColor(cyan).text(item.years, 400, rowY, {
    width: 158,
    align: "right",
  });
  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(muted)
    .text(item.company, left, doc.y + 1, { width: right - left });
  doc.font("Helvetica").fontSize(10).fillColor(ink).text(item.line, { width: right - left });
  doc.moveDown(0.45);
}

section("Education");
for (const item of education) {
  ensureSpace(36);
  const rowY = doc.y;
  doc.font("Helvetica-Bold").fontSize(11).fillColor(ink).text(item.qualification, left, rowY, {
    width: item.years ? 390 : right - left,
  });
  if (item.years) {
    doc.font("Helvetica").fontSize(9).fillColor(cyan).text(item.years, 430, rowY, {
      width: 128,
      align: "right",
    });
  }
  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(muted)
    .text(item.school, left, Math.max(doc.y, rowY + 14), { width: right - left });
  doc.moveDown(0.4);
}

section("Selected work");
for (const item of projects) {
  ensureSpace(36);
  doc.font("Helvetica-Bold").fontSize(11).fillColor(ink).text(item.name, left, doc.y, {
    width: right - left,
  });
  doc.font("Helvetica").fontSize(10).fillColor(ink).text(item.detail, { width: right - left });
  if (item.url) {
    doc.fillColor(cyan).fontSize(9).text(item.url, { width: right - left, link: item.url });
  }
  doc.moveDown(0.4);
}

await new Promise((resolve, reject) => {
  doc.on("end", resolve);
  doc.on("error", reject);
  doc.end();
});

console.log(`Wrote ${outputPath}`);
