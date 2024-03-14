/**
 * @file      user.real.test.js
 * @brief     This class is designed to test the behaviour of a login.
 * @author    Created by Sebastien.Moraz
 * @version   14-03-2024 - original
 */

const MetaConnector = require('../MetaConnector.js');
const User = require('../User.js');

describe('User initialisation', () => {

    test('initialize User', () => {
        // GIVEN
        let user;
        // WHEN
        user = new User();
        // THEN
        expect(user.status).toEqual('disconnected');

    });
});

describe('User connection real MetaConnector', () => {

    test('login User with MetaConnector', () => {
        // GIVEN
        const user = new User();
        const metaConnector = new MetaConnector();
        // WHEN
        $userDataJson = user.login(metaConnector);
        user.importMetaData($userDataJson);
        // THEN
        expect(user.status).toEqual('connected');
        expect(user.userId).toEqual('{user-id}');

    });

    test('logout User', () => {
        // GIVEN
        const user = new User();
        const metaConnector = new MetaConnector();
        // WHEN
        $userDataJson = user.login(metaConnector);
        user.importMetaData($userDataJson);
        user.logout();
        // THEN
        expect(user.status).toEqual('disconnected');
        expect(user.userId).toEqual('');

    });
});
