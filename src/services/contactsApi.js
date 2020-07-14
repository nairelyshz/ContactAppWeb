

class ContactsApi {
    baseUrl = 'http://localhost:8080/';

    async getAllcontacts(){
        return fetch(this.baseUrl + 'contacts',{method:'GET'});
    }
}

export default ContactsApi;