/**
 * @file      user.off.test.js
 * @brief     This class is designed to test the behaviour of a login.
 * @author    Created by Sebastien.Moraz
 * @version   22-02-2024 - original
 */

const MetaConnector = require('../MetaConnector.js');
const User = require('../User.js');

beforeEach(() => {
    metaConnector = new MetaConnector();
    metaConnector.login = jest.fn(() => {
        return {
            status: 'connected',
            authResponse: {
                accessToken: '{access-token}',
                expiresIn:'{unix-timestamp}',
                reauthorize_required_in:'{seconds-until-token-expires}',
                signedRequest:'{signed-parameter}',
                userID:'{user-id}'
            }
        }
    });
});

describe('User connection offline MetaConnector', () => {

    test('login User with MetaConnector', () => {
        // GIVEN
        let user = new User();
        // WHEN
        $userDataJson = user.login(metaConnector);
        user.importMetaData($userDataJson);
        // THEN
        expect(user.status).toEqual('connected');
        expect(user.userId).toEqual('{user-id}');

    });

    test('logout User', () => {
        // GIVEN
        let user = new User();
        // WHEN
        $userDataJson = user.login(metaConnector);
        user.importMetaData($userDataJson);
        user.logout();
        // THEN
        expect(user.status).toEqual('disconnected');
        expect(user.userId).toEqual('');

    });
});