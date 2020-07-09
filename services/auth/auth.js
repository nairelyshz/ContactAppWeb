
function auth(express, database){
    const app = express;

    
    const AuthController = require('./authController');
    const controller = new AuthController(database);
    
    //register
    app.post('/register', function (req, res) {
        if(controller.createUser(req.body)){
            res.send('[POST]Saludos desde express');

        }else{
            res.send('Error');

        };
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
