import {test, expect} from '@playwright/test'
test('login', async({page}) => {

    await page.goto('http://127.0.0.1:5500/login.html')
    await page.locator('input#username').fill('user')
    await page.locator ('input#password').fill('pass')
    await page.locator('//button[@type=\'submit\']').click()
    await page.getByRole('button', { name: 'Añadir transacción' }).click();

    const btn = page.getByRole('button', { name: 'Añadir transacción' });
    await page.waitForLoadState('networkidle'); // clave
    await btn.click();
        await page.locator('#transactionModal').waitFor({ state: 'visible' });

    await page.locator('id=date').fill('2023-12-31')
    await page.locator('id=amount').fill('500')
    await page.locator('id=description').fill('Description testing')
    await page.locator('//button[contains(text(), \'Guardar\')]').click()
    const actualDate = await page.locator("//tbody[@id='transactions-list']//tr[1]//td[1]").textContent()
    const actualAmount = await page.locator("//tbody[@id='transactions-list']//tr[1]//td[2]").textContent()
    const actualDescription = await page.locator("//tbody[@id='transactions-list']//tr[1]//td[3]").textContent()
    expect(actualDate).toEqual('2023-12-31')
    expect(actualAmount).toEqual('500')
    expect(actualDescription).toEqual('Description testing')
   

});

