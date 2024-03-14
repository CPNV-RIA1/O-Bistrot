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

    test('User entered content change', async () => {
        //given
        // Get an entered content, here username input value
        const username = await driver.findElement(By.id('username')).getAttribute('value');

        //when
        // Simulate language change action (for example, clicking a language selector)
        await driver.findElement(By.id('language-selector')).click();

        // Wait for the language to update (0.5 seconds)
        await driver.wait(500);

        // Get the updated DOM structure after the language change
        const updatedUsername = await driver.findElement(By.id('username')).getAttribute('value');

        //then
        // Assuming the DOM structure changes after the language change
        expect(updatedUsername).toEqual(username);
    });

    test('Positioning of graphical elements', async () => {
        //given
        // Get the initial html structure and css elements
        const initialHTML = await driver.getPageSource();
        const initialCSS = await driver.executeScript(getComputedStyle);

        //when
        await driver.findElement(By.id('language-selector')).click();

        // Wait for the language to update (0.5 seconds)
        await driver.wait(500);

        // Get the updated html structure and css elements
        const updatedHTML = await driver.getPageSource();
        const updatedCSS = await driver.executeScript(getComputedStyle);

        //then
        // Assuming the HTML structure and CSS style has not changed after language update
        expect(updatedHTML).toEqual(initialHTML);
        expect(updatedCSS).toEqual(initialCSS);
    });
});
