const { chromium } = require('playwright');

async function captureScreenshots() {
    const browser = await chromium.launch();
    const viewports = [
        { name: '320', width: 320, height: 568 },   // iPhone SE
        { name: '375', width: 375, height: 667 },   // iPhone 8
        { name: '390', width: 390, height: 844 },   // iPhone 12
        { name: '430', width: 430, height: 932 },   // iPhone 14 Pro Max
        { name: '768', width: 768, height: 1024 },  // iPad
        { name: '1024', width: 1024, height: 768 }, // Desktop small
        { name: '1440', width: 1440, height: 900 }, // Desktop
    ];

    const pages = [
        { name: 'index', url: 'http://localhost:8000/index.html' },
        { name: 'about', url: 'http://localhost:8000/about.html' },
        { name: 'contacts', url: 'http://localhost:8000/contacts.html' },
        { name: 'he-index', url: 'http://localhost:8000/he/index.html' },
    ];

    const screenshotsDir = './screenshots';

    for (const page of pages) {
        for (const viewport of viewports) {
            const context = await browser.newContext({
                viewport: { width: viewport.width, height: viewport.height }
            });
            const browserPage = await context.newPage();

            try {
                await browserPage.goto(page.url, { waitUntil: 'networkidle', timeout: 10000 });
                await browserPage.waitForTimeout(500);

                const filename = `${screenshotsDir}/${page.name}-${viewport.name}.png`;
                await browserPage.screenshot({ path: filename, fullPage: false });
                console.log(`Captured: ${filename}`);

                // For mobile viewports, also capture the mobile menu
                if (viewport.width <= 768) {
                    // Click the hamburger menu
                    const menuToggle = await browserPage.$('.mobile-menu-toggle');
                    if (menuToggle) {
                        await menuToggle.click();
                        await browserPage.waitForTimeout(500);
                        const menuFilename = `${screenshotsDir}/${page.name}-${viewport.name}-menu-open.png`;
                        await browserPage.screenshot({ path: menuFilename, fullPage: false });
                        console.log(`Captured: ${menuFilename}`);
                    }
                }
            } catch (error) {
                console.error(`Error capturing ${page.name} at ${viewport.name}: ${error.message}`);
            }

            await context.close();
        }
    }

    await browser.close();
    console.log('Done capturing screenshots!');
}

captureScreenshots().catch(console.error);
