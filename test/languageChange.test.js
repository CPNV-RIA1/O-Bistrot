/**
 * @file      languageChange.test.js
 * @brief     This class is designed to test the behaviour of the language.
 * @author    Created by Victorien Montavon
 * @version   29.02.2024 - First version
 */

import {describe, test} from "jest-circus";
import {changeLanguage} from "i18next";
import expect from "expect";

describe('testing the behavior of the page when changing language', () => {

    test('Language change should update text content', async () => {
        //given
        document.body.innerHTML = `
        <h1 data-i18n="greeting">Hello, World!</h1> 
        <p data-i18n="description">This is a sample application.</p>
    `; // TODO: Replace with actual html paragraphs

        //when
        await changeLanguage("fr");

        //then
        expect(document.querySelector('[data-i18n="greeting"]').textContent).toBe(/* TODO: replace with the actual text */);
        expect(document.querySelector('[data-i18n="description"]').textContent).toBe(/* TODO: replace with the actual text */);
    });
});
