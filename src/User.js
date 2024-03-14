class User{
    status;
    userId;

    constructor(){
        this.status = 'disconnected';
    }

    login(connector){
        let userDataJson = connector.login();
        return userDataJson;
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