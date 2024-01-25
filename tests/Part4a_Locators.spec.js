//const {test, expect} = require('@playwrigt/test')
import {test,expect} from '@playwright/test'
import exp from 'constants'

test('Locators', async ({page}) => {

    await page.goto("https://www.demoblaze.com")
    await page.locator('id=loign2').click()

    // await page.click('id=login2)

    // click on login button - property
    //provide username - CSS
    // await page.locator('#loginusername').fill("pavanol")
    await page.fill('#loginusername', 'pavanol')
    // await page.type('#loginusername', 'pavanol')
    // provite password - CSS
    await page.fill("input[id='loginpassword']", 'test@123')

    //Click on login button
    await page.click("//button[normalize-space()='Log in']")

    //verify logout link presence
    const logoutlink = await page.locator("//a[normalize-space()='Log out']")

    await expect(logoutlink).toBeVisible();
    await page.close()


})
