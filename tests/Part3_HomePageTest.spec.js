const {test, expect} = require('@plawright/test');

test('Home Page', async ({page}) => {
    await page.goto('https://www.demoblaze.com/inden.html');

    const pageTitle=await pag.title();
    console.log('Page title is:', pageTitle);

    await expect(page).toHaveTitle('STORE');

    const pageURL = page.url();
    console.log('Page URL is:', pageURL);

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    await page.close();
})