

class AuthApi {
    baseUrl = 'http://localhost:8080/';
    headers = { "Content-Type": "application/x-www-form-urlencoded" }
    
    async login(data){
        console.log(data);
        console.log({method:"POST", body: data, headers: this.headers});
        return fetch(this.baseUrl + 'login',{method:"POST", body: data, headers: this.headers});
    }

    async register(data){
        console.log(data);
        return fetch(this.baseUrl + 'register',{method:"POST", body: data, headers: this.headers});
    }
}

export default AuthApi;