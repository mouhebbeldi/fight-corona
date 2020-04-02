const jwt = require ('jsonwebtoken');
const config = require ('config');

module.exports= function(req ,res ,next){
    //heere we get the token from the header 
    const token =req.header('x-auth-token');
    //check if not token
    if(!token) {
       return res.status(401).json({msg:"no token , no authorization"});
    }
    try {
        const decoded= jwt.verify(token, config.get('jwtSECRET'));
        req.user =decoded.user ;
        next();
    } catch (err) {
        res.status(401).json({msg:"token is not valid"});
    }
}