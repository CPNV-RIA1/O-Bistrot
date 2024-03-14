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
});
