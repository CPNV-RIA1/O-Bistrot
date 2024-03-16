/**
 * Localization OFF test
 * Author : Victorien Montavon
 * Date : 14.03.2024
 * Version : 1.0
 */

const { expect, test, describe } = require('@jest/globals');
const { Builder, By, until } = require('selenium-webdriver');
const { Options, Select } = require('selenium-webdriver/chrome');

describe('testing localization off', () => { // remove async here
    //set up the scenario
    let driver;
    let options;

    beforeAll(async () => {
        // Create profile for prevent the real localization or external behavior
        options = new Options();
        options.addArguments("--lang=en");

        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

        // Let Selenium go to the webpage
        await driver.get('http://localhost:5500/public_html/restaurant.html');
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Should change language to French', async () => {
        //given
        // Get the initial DOM structure
        const initialDOM = await driver.getPageSource();

        //when
        // Simulate language change action (for example, clicking a language selector)
        const selectElement = await driver.wait(until.elementLocated(By.id('change-language')), 5000);
        const option = await selectElement.findElement(By.css(`option[value='fr']`));
        await option.click();

        // Get the updated DOM structure after the language change
        const updatedDOM = await driver.getPageSource();

        //then
        // Assuming the DOM structure changes after the language change
        expect(updatedDOM).not.toEqual(initialDOM);
    });

    test('User entered content change', async () => {
        //given
        const datePicker = await driver.wait(until.elementLocated(By.id('date-input')), 5000);

        //set the initial date
        await datePicker.click()
        await datePicker.sendKeys('03-04-2024');


        // Get the initial booking date
        const bookingDate = await datePicker.getAttribute('value');

        //when
        // Simulate language change action (for example, clicking a language selector)
        const selectElement = await driver.wait(until.elementLocated(By.id('change-language')), 5000);
        const option = await selectElement.findElement(By.css(`option[value='en']`));
        await option.click();


        // Get the updated date
        const updatedBookingDate = await datePicker.getAttribute('value');

        //then
        // Assuming the dates are the same after the language change
        expect(updatedBookingDate).toEqual(bookingDate);
    });

    test('Positioning of graphical elements', async () => {
        //given
        // Get the initial html structure and css elements
        const body = await driver.wait(until.elementLocated(By.id('home')), 5000);
        const initialBodyWith = await body.getCssValue('width');
    
        //when
        const selectElement = await driver.wait(until.elementLocated(By.id('change-language')), 5000);
        const option = await selectElement.findElement(By.css(`option[value='de']`));
        await option.click();
        
        // Get the updated html structure and css elements
        const updatedHTML = await driver.getPageSource();
        const updatedBodyWidth = await body.getCssValue('width');
    
        //then
        // Assuming the HTML structure and CSS style has not changed after language update
        expect(updatedBodyWidth).toEqual(initialBodyWith);
    });
});
