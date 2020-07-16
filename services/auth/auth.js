
function auth(express, admin){
    const app = express;

    
    const AuthController = require('./authController');
    const controller = new AuthController(admin);
    
    //register
    app.post('/register', async (req, res) => {
        console.log("register",req.body);
        controller.createUser(req.body).then(response =>{
            res.send({status: 200, message: 'User created', data: response});

        })
        .catch(err=>{
            res.send({status: 500, message: err});
        });
    });
    
    //login
    app.post('/login', function (req, res) {
        console.log(typeof req.body);
        console.log(req.body);
        console.log(JSON.stringify(req.body));
        const flag = controller.login(req.body);
        console.log(flag);
        if(flag){
            res.send({status: 200, message: 'log in success'});
        }else{
            res.send({status: 401, message: 'log in failed'});
        };
    });
    
    //forgot password
    app.post('/forgotpassword', function (req, res) {
        res.send('[POST]Saludos desde express');
    });
    
    //Update user profile
    app.put('/updateUser', function (req, res) {
        if(controller.updateUser(req.body)){
            res.send({status: 200, message: 'User updated', data: req.body});
        }else{
            res.send({status: 401, message: 'imposible update user'});

        };
    });
  
}

module.exports = auth;
