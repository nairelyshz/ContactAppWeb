

class contactsController{

    constructor(admin){
        this.db = db.database();
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

module.exports = contactsController;