import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const urls = [
  { name: 'cargomate', url: 'https://charanakaprabha.github.io/Cargomate' },
  { name: 'saikulwanth', url: 'https://srisaikulwanth.vercel.app' },
  { name: 'carameshy', url: 'https://www.carameshy.com/' },
  { name: 'halftone', url: 'https://www.halftonesystems.com/' },
  { name: 'unipick', url: 'https://www.unipick.org/' },
  { name: 'vexamo', url: 'https://www.vexamo.in/' }
];

const outDir = path.resolve('public', 'assets', 'projects');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const page = await context.newPage();

  for (const item of urls) {
    console.log(`Navigating to ${item.name}...`);
    try {
      await page.goto(item.url, { waitUntil: 'load', timeout: 30000 });
      // wait a bit for animations
      await page.waitForTimeout(2000);
      const outPath = path.join(outDir, `${item.name}.png`);
      await page.screenshot({ path: outPath });
      console.log(`Saved screenshot to ${outPath}`);
    } catch (err) {
      console.error(`Failed to capture ${item.name}:`, err);
    }
  }

  await browser.close();
  console.log('Done screenshots.');
})();
