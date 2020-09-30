const jwt = require("jsonwebtoken");


module.exports.authenticate = (req, res, next) => {
    // console.log(`UserToken: ${req.secret}`);
    // for(var k in req){
    //     console.log("key ",k);
    // }
    // console.log(secret);
    jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, (err, payload) => {
        console.log("These are cookies",req.cookies);
        if (err) { 
            res.status(401).json({verified: false});
        } else {
            next();
        }
    });
}