class User{
    status;
    userId;


    login(connector){
        throw new Error('Not implemented');
    }
    logout(){
        throw new Error('Not implemented');
    }
    importMetaData(data){
        throw new Error('Not implemented');
    }
}

module.exports = User;