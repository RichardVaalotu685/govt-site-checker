// Import the necessary Playwright modules
const { chromium } = require('playwright');

// Define the test suite
describe('Government Sites Checker', () => {
  // Test if the H1 title is present
  test('H1 title is present', async () => {
    // Launch a new browser instance
    const browser = await chromium.launch();

    // Create a new browser context
    const context = await browser.newContext();

    // Create a new page
    const page = await context.newPage();

    // Navigate to the government sites checker page
    await page.goto('http://localhost:3000');

    // Test if the H1 title is present
    const h1Text = await page.textContent('h1');
    expect(h1Text).toContain('Government Sites Checker');

    // Close the browser
    await browser.close();
  });

  // Test if the Refresh button is present
  test('Refresh button is present', async () => {
    // Launch a new browser instance
    const browser = await chromium.launch();

    // Create a new browser context
    const context = await browser.newContext();

    // Create a new page
    const page = await context.newPage();

    // Navigate to the government sites checker page
    await page.goto('http://localhost:3000');

    // Test if the Refresh button is present
    const refreshButton = await page.$('#refresh-button');
    expect(refreshButton).not.toBeNull();

    // Close the browser
    await browser.close();
  });

  // Test if a list item of a govt site is present
  test('List item of govt site is present', async () => {
    // Launch a new browser instance
    const browser = await chromium.launch();

    // Create a new browser context
    const context = await browser.newContext();

    // Create a new page
    const page = await context.newPage();

    // Navigate to the government sites checker page
    await page.goto('http://localhost:3000');

    // Test if a list item of a govt site is present
    const listItem = await page.$('#sites-list li:nth-child(1)');
    expect(listItem).not.toBeNull();

    // Close the browser
    await browser.close();
  });

  // Test if latency text is present when site is available
  test('Latency text is present when site is available', async () => {
    // Launch a new browser instance
    const browser = await chromium.launch();

    // Create a new browser context
    const context = await browser.newContext();

    // Create a new page
    const page = await context.newPage();

    // Navigate to the government sites checker page
    await page.goto('http://localhost:3000');

    // Test if latency text
   //Modify as you want uso I tried this is run on my localhost so change accordingly that works for you but it works for me.
