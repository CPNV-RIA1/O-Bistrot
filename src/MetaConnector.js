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

    getButton() {
        return '<a data-lang="fr" class="login-button btn btn-primary btn-sm">Se connecter</a>' +
            '<a data-lang="en" class="login-button btn btn-primary btn-sm" >Login</a>' +
            '<a data-lang="de" class="login-button btn btn-primary btn-sm">Sich anmelden</a>';

    }

}

window.MetaConnector = MetaConnector;