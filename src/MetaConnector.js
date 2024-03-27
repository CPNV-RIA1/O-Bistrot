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

    async getLoginStatus() {
        return new Promise((resolve, reject) => {
            FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    resolve(response);
                } else {
                    reject('Not connected');
                }
            });
        });
    }

    async getButton() {
        //if allready connected
        try {
            const checkUserConnected = await this.getLoginStatus()
        } catch {
            return '<a data-lang="fr" class="login-button btn btn-primary btn-sm">Se connecter</a>' +
                '<a data-lang="en" class="login-button btn btn-primary btn-sm" >Login</a>' +
                '<a data-lang="de" class="login-button btn btn-primary btn-sm">Sich anmelden</a>';
        }
        return '<a data-lang="en" class="logout-button btn btn-primary btn-sm">Logout</a>' +
            '<a data-lang="fr" class="logout-button btn btn-primary btn-sm">Se deconnecter</a>' +
            '<a data-lang="de" class="logout-button btn btn-primary btn-sm">Abmelden</a>';
    }

    logout() {
        return new Promise((resolve, reject) => {
            FB.logout(function(response) {
                if (response.status === 'unknown') {
                    resolve(response);
                } else {
                    reject('Logout failed');
                }
            });
        });
    }

}

window.MetaConnector = MetaConnector;