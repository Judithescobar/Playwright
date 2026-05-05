import {test, expect} from '@playwright/test'
test('registration', async({page}) => {


await page.locator("id=name").fill('Juan')
await page.locator("id=last-name").fill('Pérez')
await page.locator("xpath=//label[contains(.,'Edad')]/following-sibling::input").fill('10')
await page.locator("id=country").selectOption('Colombia')
await page.locator("input[value='M']").click()
await page.locator("id=email").fill('Juan@gmail.com')
await page.locator("id=monday").click()
await page.locator("id=picture").setInputFiles('C:\Recursos')
})