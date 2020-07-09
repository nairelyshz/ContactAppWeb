

class authController{

    constructor(db){
        this.db = db;
    }
    
    createUser(data){
        this.db.ref('contacts').push(data);
        console.log("user created");

        return true;
    }

    updateUser(){

    }

    passwordRecovery(){

    }

    login(){

    }
}

module.exports = authController;