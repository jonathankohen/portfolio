const LoginRegController = require('../controllers/loginReg.controller'),
    UserController = require('../controllers/user.controller'),
    {authenticate} = require('../config/jwt.config');


module.exports = (app) => {
    app.post("/api/register",LoginRegController.register);
    app.post("/api/login",LoginRegController.login);
    //  Authenticate to prevent hackers from accessing your database.
    app.get("/api/users",authenticate, UserController.index);
    app.get("/api/logout",authenticate,LoginRegController.logout);
}