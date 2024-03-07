/*
 Testing library setup file
 */

import '@testing-library/jest-dom';
import i18n from './public_html/assets/locales/**/**.js';

jest.mock('i18next', () => ({
    useTranslation: () => ({ t: (key) => key }),
}));

beforeAll(async () => {
    await i18n.init();
});