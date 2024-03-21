class User{
    status;
    userId;

    constructor(){
        this.status = 'disconnected';
    }

    login(connector){
        return connector.login();
    }
    logout(){
        this.status = 'disconnected';
        this.userId = "";
    }
    importMetaData(data){
        this.status = data.status;
        this.userId = data.authResponse.userID;
    }
}

module.exports = User;