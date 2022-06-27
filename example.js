const puppeteer = require("puppeteer");
const screenshot = "screenshot/example.png";

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
    ],
  });

  const url = "https://google.com";

  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "load" });
    console.log("Go to " + url + "...");
    await page.screenshot({ path: screenshot, fullPage: true });
    console.log("See screenshot: " + screenshot);
  } catch (e) {
    console.error(e);
  } finally {
    browser.close();
  }
})();
