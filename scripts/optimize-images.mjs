import fg from "fast-glob";
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const INPUT_ROOT = "public/images";
const OUTPUT_ROOT = "public/images_optimized";

// Max display width for gallery images (safe for full-screen)
const MAX_WIDTH = 1600;

// WebP quality sweet spot (fast decode, visually lossless)
const WEBP_QUALITY = 78;

const patterns = [
  `${INPUT_ROOT}/me/**/*.{jpg,jpeg,png}`,
  `${INPUT_ROOT}/food/**/*.{jpg,jpeg,png}`,
  `${INPUT_ROOT}/nature/**/*.{jpg,jpeg,png}`,
  `${INPUT_ROOT}/misc/**/*.{jpg,jpeg,png}`,
];

const files = await fg(patterns, { dot: false });

if (files.length === 0) {
  console.log("No images found under public/images/*");
  process.exit(0);
}

console.log(`Found ${files.length} images`);

for (const file of files) {
  const relative = path.relative(INPUT_ROOT, file); // e.g. me/me1.jpg
  const outDir = path.join(OUTPUT_ROOT, path.dirname(relative));
  const baseName = path.parse(relative).name;
  const outFile = path.join(outDir, `${baseName}.webp`);

  await fs.mkdir(outDir, { recursive: true });

  const image = sharp(file, { failOn: "none" });

  await image
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(outFile);

  console.log(`✓ ${file} → ${outFile}`);
}

console.log("Image optimization complete.");
console.log("Optimized images located in /public/images_optimized/");
