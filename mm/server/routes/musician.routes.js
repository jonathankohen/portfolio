const MusicianController = require('../controllers/musician.controllers'),
    LoginRegController = require('../controllers/loginReg.controllers'),
    { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.post('/api/register', LoginRegController.register);
    app.post('/api/login', LoginRegController.login);
    app.post('/api/logout', authenticate, LoginRegController.logout);

    app.get('/api/musicians', authenticate, MusicianController.index);
    // app.get('/api/musician/:id', authenticate, MusicianController.display_one);
    // app.put(
    //     '/api/update/musician/:id',
    //     authenticate,
    //     MusicianController.update,
    // );
    // app.delete(
    //     '/api/destroy/musician/:id',
    //     authenticate,
    //     MusicianController.destroy,
    // );
};
