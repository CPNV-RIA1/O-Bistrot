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

    async getUsername() {
        if (this.isAlreadyLogin()) {
            return new Promise((resolve, reject) => {
                FB.api('/me', function (response) {
                    if (response) {
                        resolve(response.name);
                    } else {
                        reject('No username');
                    }
                });
            });
        } else {
            throw new Error("User is not connected")
        }
    }

    async isAlreadyLogin() {
        try {
            const userData = await this.getLoginStatus();
            return (userData.status === "connected")
        } catch {
            return false;
        }

    }

    async getButton() {
        if (await this.isAlreadyLogin()) {
            const username = await this.getUsername();
            return '<a data-lang="en" class="logout-button btn btn-primary btn-sm">' + username + ' | Logout</a>' +
                '<a data-lang="fr" class="logout-button btn btn-primary btn-sm">' + username + ' | Se deconnecter</a>' +
                '<a data-lang="de" class="logout-button btn btn-primary btn-sm">' + username + ' | Abmelden</a>';
        } else {
            return '<a data-lang="fr" class="login-button btn btn-primary btn-sm">Se connecter</a>' +
                '<a data-lang="en" class="login-button btn btn-primary btn-sm" >Login</a>' +
                '<a data-lang="de" class="login-button btn btn-primary btn-sm">Sich anmelden</a>';
        }

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