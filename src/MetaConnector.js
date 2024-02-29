class MetaConnector {

    status;
    name;
    email;
    constructor() {

    }

    login() {
        throw new Error('Not implemented');
    }

    logout() {
        throw new Error('Not implemented');
    }

}

module.exports = MetaConnector;