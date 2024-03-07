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

    test('Language change should update text content to English', async () => {
        //given
        document.body.innerHTML = `
        <h1 data-i18n="greeting">Hello, Welcome!</h1> 
        <p data-i18n="description">This is a sample application.</p>
    `; // TODO: Replace with actual html paragraphs

        //when
        await changeLanguage("fr");

        //then
        expect(document.querySelector('[data-i18n="greeting"]').textContent).toBe(/* TODO: replace with the actual text */);
        expect(document.querySelector('[data-i18n="description"]').textContent).toBe(/* TODO: replace with the actual text */);
    });

    test('Language change should update text content to French', async () => {
        //given
        document.body.innerHTML = `
        <h1 data-i18n="greeting">Bonjour, Bienvenue!</h1> 
        <p data-i18n="description">Il s'agit d'un exemple d'application.</p>
    `; // TODO: Replace with actual html paragraphs

        //when
        await changeLanguage("en");

        //then
        expect(document.querySelector('[data-i18n="greeting"]').textContent).toBe(/* TODO: replace with the actual text */);
        expect(document.querySelector('[data-i18n="description"]').textContent).toBe(/* TODO: replace with the actual text */);
    });

    test('Language change should update text content to English', async () => {
        //given
        document.body.innerHTML = `
        <h1 data-i18n="greeting">Hallo Willkommen!</h1> 
        <p data-i18n="description">Dies ist ein Anwendungsbeispiel.</p>
    `; // TODO: Replace with actual html paragraphs

        //when
        await changeLanguage("de");

        //then
        expect(document.querySelector('[data-i18n="greeting"]').textContent).toBe(/* TODO: replace with the actual text */);
        expect(document.querySelector('[data-i18n="description"]').textContent).toBe(/* TODO: replace with the actual text */);
    });

    test("User entered content should be stable after language change", async () => {
        //given
        const username = document.getElementById("username").innerHTML;

        //when
        await changeLanguage("en");

        //then
        expect(document.getElementById("username").innerHTML).toBe(username);


    });
});
