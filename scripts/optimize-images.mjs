import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join } from 'path';

const SRC = '/tmp/claude-0/-home-user-chinthakacabs/655b1f0b-34f5-5a9b-9705-74e678bd38cf/images';
const OUT = join(process.cwd(), 'public/images');

const imageMap = {
  // Hero/About images
  '10.webp': { name: 'nine-arches-bridge', dir: 'hero', sizes: [1920, 960, 640] },
  // Destinations
  '2.webp': { name: 'horton-plains-waterfall', dir: 'destinations', sizes: [800, 400] },
  '3.webp': { name: 'liptons-seat', dir: 'destinations', sizes: [800, 400] },
  '15.webp': { name: 'sigiriya', dir: 'destinations', sizes: [800, 400] },
  '12.webp': { name: 'sambar-deer', dir: 'destinations', sizes: [800, 400] },
  '17.jpg': { name: 'worlds-end', dir: 'destinations', sizes: [800, 400] },
  '18.jpg': { name: 'kandy-lake', dir: 'destinations', sizes: [800, 400] },
  '20.jpg': { name: 'temple-of-tooth', dir: 'destinations', sizes: [800, 400] },
  // Gallery - with tourists
  '4.webp': { name: 'safari-with-tourist', dir: 'gallery', sizes: [800, 400] },
  '5.webp': { name: 'group-at-lodge', dir: 'gallery', sizes: [800, 400] },
  '6.webp': { name: 'coastal-monument', dir: 'gallery', sizes: [800, 400] },
  '7.webp': { name: 'airport-pickup', dir: 'gallery', sizes: [800, 400] },
  '8.webp': { name: 'horton-plains-group', dir: 'gallery', sizes: [800, 400] },
  '9.webp': { name: 'team-with-van', dir: 'gallery', sizes: [800, 400] },
  '11.webp': { name: 'horton-plains-sign', dir: 'gallery', sizes: [800, 400] },
  '13.webp': { name: 'national-park-friends', dir: 'gallery', sizes: [800, 400] },
  '14.webp': { name: 'viewpoint-tourists', dir: 'gallery', sizes: [800, 400] },
  '16.jpg': { name: 'horton-plains-trek', dir: 'gallery', sizes: [800, 400] },
  '19.jpg': { name: 'kandy-lake-pavilion', dir: 'gallery', sizes: [800, 400] },
};

async function optimize() {
  for (const [filename, config] of Object.entries(imageMap)) {
    const srcPath = join(SRC, filename);
    const outDir = join(OUT, config.dir);
    await mkdir(outDir, { recursive: true });

    for (const width of config.sizes) {
      const outPath = join(outDir, `${config.name}-${width}w.webp`);
      await sharp(srcPath)
        .resize(width, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outPath);

      const outPathJpg = join(outDir, `${config.name}-${width}w.jpg`);
      await sharp(srcPath)
        .resize(width, null, { withoutEnlargement: true })
        .jpeg({ quality: 80 })
        .toFile(outPathJpg);

      console.log(`✓ ${config.name}-${width}w`);
    }
  }
  console.log('Done!');
}

optimize().catch(console.error);
