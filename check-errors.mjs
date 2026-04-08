import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('pageerror', error => {
    console.log('[PAGE ERROR]', error.message);
  });
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('[CONSOLE ERROR]', msg.text());
    }
  });

  await page.goto('http://localhost:5173', { waitUntil: 'load', timeout: 5000 });
  await page.waitForTimeout(3000); // Wait for loading screen to finish and Projects to mount!
  
  const root = await page.$eval('#root', el => el.innerHTML);
  if (!root || root.trim() === '') {
     console.log("[REACT CRASH] #root is empty!");
  }
  
  await browser.close();
})();
