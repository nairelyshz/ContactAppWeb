function auth(params){
    const app = params;

    //register
    app.post('/register', function (req, res) {
        res.send('[POST]Saludos desde express');
    });
    
    //login
    app.post('/login', function (req, res) {
        res.send('[POST]Saludos desde express');
    });
    
    //forgot password
    app.post('/forgotpassword', function (req, res) {
        res.send('[POST]Saludos desde express');
    });
    
    //Update user profile
    app.put('/contact', function (req, res) {
        res.send('[POST]Saludos desde express');
    });
  
}

module.exports = auth;
