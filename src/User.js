class User{
    status;
    userId;

    constructor(){
        this.status = 'disconnected';
    }

    async login(connector){
        return await connector.login();
    }
    async logout(connector){
        return await connector.logout();
    }
    importMetaData(data){
        this.status = data.status;
        this.userId = data.authResponse.userID;
    }

    getButton(connector){
        return connector.getButton();
    }
}

window.User = User;