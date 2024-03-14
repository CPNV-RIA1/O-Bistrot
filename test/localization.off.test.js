/**
 * Localization OFF test
 * Author : Victorien Montavon
 * Date : 14.03.2024
 * Version : 1.0
 */

import {expect, jest, test, describe} from '@jest/globals';
import {Builder, By, until} from "selenium-webdriver";
import {Options} from "selenium-webdriver/chrome";

describe('testing localization off', async () => {
    //set up the scenario
    let driver;

    beforeAll(async () => {
        // Create profile for prevent the real localization or external behavior
        options = new Options();
        options.addArguments("--lang=en");

        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

        // Let Selenium go to the webpage
        await driver.get('http://localhost:3000');
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
        await driver.findElement(By.id('language-selector')).click();

        // Wait for the language to update (0.5 seconds)
        await driver.wait(500);

        // Get the updated DOM structure after the language change
        const updatedDOM = await driver.getPageSource();

        //then
        // Assuming the DOM structure changes after the language change
        expect(updatedDOM).not.toEqual(initialDOM);
    });
});
