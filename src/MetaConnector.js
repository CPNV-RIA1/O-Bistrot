class MetaConnector {
    constructor() {
    }

    login() {
        return new Promise((resolve, reject) => {
            FB.login(function(response) {
                if (response.status === 'connected') {
                    resolve(response);
                } else {
                    reject('Login failed');
                }
            });
        });
    }

}

module.exports = MetaConnector;