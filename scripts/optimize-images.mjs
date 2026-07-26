import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(projectRoot, 'public');

const images = [
  { source: 'hero1.jpg', width: 2560 },
  { source: 'hero2.jpg', width: 2560 },
  { source: 'hero3.jpg', width: 2560 },
  { source: 'about.jpg', width: 1600 },
  { source: 'equip.jpg', width: 1600 },
];

for (const { source, width } of images) {
  const input = path.join(publicDir, source);
  const output = path.join(publicDir, source.replace(/\.jpe?g$/i, '.webp'));

  const info = await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 84, effort: 6, smartSubsample: true })
    .toFile(output);

  console.log(`${source} -> ${path.basename(output)} (${info.width}x${info.height})`);
}
