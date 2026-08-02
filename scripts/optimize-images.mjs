import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(projectRoot, 'public');

const images = [
  { source: 'hero1.jpg', widths: [640, 1280, 1920], quality: 72 },
  { source: 'hero2.jpg', widths: [640, 1280, 1920], quality: 72 },
  { source: 'hero3.jpg', widths: [640, 1280, 1920], quality: 72 },
  { source: 'about.jpg', widths: [480, 800], quality: 76 },
  { source: 'equip.jpg', widths: [480, 800], quality: 76 },
];

for (const { source, widths, quality } of images) {
  const input = path.join(publicDir, source);
  const base = source.replace(/\.jpe?g$/i, '');

  for (const width of widths) {
    const output = path.join(publicDir, `${base}-${width}.webp`);
    const info = await sharp(input)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort: 6, smartSubsample: true })
      .toFile(output);

    console.log(`${source} -> ${path.basename(output)} (${info.width}x${info.height})`);
  }
}

await sharp(path.join(publicDir, 'logo.png'))
  .webp({ quality: 82, effort: 6, alphaQuality: 90 })
  .toFile(path.join(publicDir, 'logo.webp'));
