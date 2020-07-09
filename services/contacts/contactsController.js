

class contactsController{

    constructor(admin){
        this.admin = admin.database();
    }
    
    async getAllContacts(){
        const snap = await getAllContactsFromFirebase();
        this.exportLikeArray(snap);
    }

    async getAllContactsFromFirebase(){
        const eventref = this.admin.ref('contacts');
        const snapshot = await eventref.once('value');
        return snapshot;
    }

    addContact(data){
        this.admin.ref('contacts').push(data);
        console.log("user created");
        return true;
    }

    async updateContact(data){
        const contacts = await this.getAllContactsFromFirebase();
        contacts.forEach((item)=>{
            const itemValue = item.val();
            if(data.email == itemValue.email){
                this.admin.ref('contacts/'+item.key).set(data);
                return true;
            }
        });
        return false;
    }

    async deleteContact(data){
        const contacts = await this.getAllContactsFromFirebase();
        contacts.forEach((item)=>{
            const itemValue = item.val();
            if(data.email == itemValue.email){
                this.admin.ref('contacts/'+item.key).remove();
                return true;
            }
        });
        return false;
    }

    exportLikeArray(snap){
        const value = [];
        snap.forEach(function(item) {
            var itemVal = item.val();
            value.push(itemVal);
        });
        return value;
    }

    

    
}

module.exports = contactsController;