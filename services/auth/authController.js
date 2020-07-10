

class authController{

    constructor(admin){
        this.admin = admin;
    }
    
    async createUser(data){

        return await this.admin.auth().createUser({
            uid: data.uid,
            email: data.email,
            emailVerified: false,
            phoneNumber: data.contactNumber,
            password: data.password,
            displayName: data.firstName +' '+ data.lastName,
            disabled: false
        });
        
          
    }

    updateUser(data){
        this.admin.auth().updateUser(data.uid, {
            uid: data.email,
            email: data.email,
            emailVerified: false,
            phoneNumber: data.contactNumber,
            password: data.password,
            displayName: data.firstName +' '+ data.lastName,
            disabled: false
        })
        .then(function(userRecord) {
            console.log('Successfully updated user', userRecord.toJSON());
            return true;

        })
        .catch(function(error) {
            console.log('Error updating user:', error);
            return false;
        });
          
    }

    passwordRecovery(){

    }

    login(data){
        this.admin.auth().getUser(data.email)
        .then(function(userRecord) {
          console.log('Successfully fetched user data:', userRecord.toJSON());
            return true;
        })
        .catch(function(error) {
          console.log('Error fetching user data:', error);
          return false;
        });
        console.log("SE VAAAAAAA");

      
    }
}

module.exports = authController;