import {test, expect} from '@playwright/test'
test('create transactions', async({page}) => {


    await page.goto('http://127.0.0.1:5500/login.html')
    await page.locator('input#username').fill('user')
    await page.locator ('input#password').fill('pass')
    await page.locator('//button[@type=\'submit\']').click()

    for(let i = 0; i <= 3; i++){    
        
    /*await page.getByRole('button', { name: 'Añadir transacción' }).click();*/

    const btn = page.getByRole('button', { name: 'Añadir transacción' });
    await page.waitForLoadState('networkidle'); // clave
    await btn.click();
    await page.locator('#transactionModal').waitFor({ state: 'visible' });

    await page.locator('id=date').fill('2023-12-31')
    await page.locator('id=amount').fill('500')
    await page.locator('id=description').fill('Description testing')
    await page.locator('//button[contains(text(), \'Guardar\')]').click()

    }





  






})