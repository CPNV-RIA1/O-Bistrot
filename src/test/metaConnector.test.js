/**
 * @file      cart.test.js
 * @brief     This class is designed to test the behaviour of a login.
 * @author    Created by Sebastien.Moraz
 * @version   22-02-2024 - original
 */

const MetaConnector = require('../MetaConnector.js');

test('MetaConnector_Check_Status_of_a_Person', () => {
    // GIVEN
    let metaConnector = new MetaConnector();
    // WHEN
    // THEN
    expect(metaConnector.status).toEqual('disconnected');

});

test('MetaConnector_Log_a_Person_in', () => {
    // GIVEN
    let metaConnector = new MetaConnector();
    // WHEN
    metaConnector.login();
    // THEN
    expect(metaConnector.status).toEqual('connected');
    expect(metaConnector.name).toEqual('Sebastien');
    expect(metaConnector.email).toEqual('sebastien@moraz.net');
});

test('MetaConnector_Log_a_Person_out', () => {
    // GIVEN
    let metaConnector = new MetaConnector();
    // WHEN
    metaConnector.login();
    metaConnector.logout();
    // THEN
    expect(metaConnector.status).toEqual('disconnected');
    expect(metaConnector.name).toEqual('');
    expect(metaConnector.email).toEqual('');
});
