
function auth(express, admin){
    const app = express;

    
    const AuthController = require('./authController');
    const controller = new AuthController(admin);
    
    //register
    app.post('/register', async (req, res) => {
        controller.createUser(req.body).then(response =>{
            console.log("response" + response.json());
        })
        .catch(err=>{
            console.log("err " + err);
        });
        const isSuccess = await true;
        if(isSuccess){
            res.send({status: 200, message: 'User created', data: req.body});
        }else{
            res.send({status: 500, message: 'Try later'});

        };
    });
    
    //login
    app.post('/login', function (req, res) {
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
