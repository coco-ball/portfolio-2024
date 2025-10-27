import sharp from "sharp";
import fs from "fs";
import path from "path";

const ROOT = path.resolve(process.cwd(), "public/image/project");

const SIZES = [800, 1600];
const FORMATS = [
  { ext: "webp", options: { quality: 75 } },
  { ext: "jpg", options: { quality: 80 } },
];

function isRaster(file) {
  return /\.(png|jpe?g)$/i.test(file); // gif는 제외
}
function shouldSkip(file) {
  return /\.(gif)$/i.test(file); // gif는 변환 스킵
}

async function convertOne(absPath) {
  const dir = path.dirname(absPath);
  const file = path.basename(absPath);
  const base = file.replace(/\.(png|jpe?g)$/i, "");

  console.log("→ 변환 대상:", path.relative(ROOT, absPath));

  for (const width of SIZES) {
    // 원본보다 크게 만들지 않음
    const p = sharp(absPath).resize({ width, withoutEnlargement: true });
    for (const { ext, options } of FORMATS) {
      const out = path.join(dir, `${base}@${width}.${ext}`);
      if (fs.existsSync(out)) {
        console.log("  ↳ 이미 존재:  ", path.relative(ROOT, out), "(skip)");
        continue;
      }
      await p.clone().toFormat(ext, options).toFile(out);
      console.log("  ↳ 생성 완료: ", path.relative(ROOT, out));
    }
  }
}

async function walk(dir) {
  const ents = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of ents) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      await walk(p);
      continue;
    }
    if (shouldSkip(e.name)) {
      console.log("✱ GIF 스킵:", path.relative(ROOT, p));
      continue;
    }
    if (isRaster(e.name)) {
      await convertOne(p);
    }
  }
}

(async () => {
  console.log("cwd:", process.cwd());
  console.log("ROOT:", ROOT);

  if (!fs.existsSync(ROOT)) {
    console.error("❌ 대상 폴더가 없습니다. 경로를 확인하세요:", ROOT);
    process.exit(1);
  }

  // 대상 파일 개수 사전 점검
  const queue = [];
  (function scan(dir) {
    const ents = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of ents) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) scan(p);
      else if (isRaster(e.name)) queue.push(p);
      else if (shouldSkip(e.name))
        console.log("✱ GIF 스킵(사전):", path.relative(ROOT, p));
    }
  })(ROOT);

  console.log(`찾은 PNG/JPG 개수: ${queue.length}`);
  if (queue.length === 0) {
    console.log("⚠️ 변환할 PNG/JPG가 없습니다. 폴더/파일 확장자를 확인하세요.");
  }

  // 실제 변환
  for (const p of queue) {
    await convertOne(p);
  }

  console.log("🎉 변환 완료");
})();
