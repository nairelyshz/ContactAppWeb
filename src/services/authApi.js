import axios from 'axios';

class AuthApi {
    baseUrl = 'http://localhost:8080/';
    headers = { "Content-Type": "application/x-www-form-urlencoded" }
    
    async login(data){
        return axios.post(this.baseUrl+'login', data)
        
    }

    async register(data){
        
        return axios.post(this.baseUrl + 'register',data);
    }
}

export default AuthApi;