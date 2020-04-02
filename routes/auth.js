const express =require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt =require('bcryptjs');
const jwt = require ('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const config = require ('config');
const auth = require('../middleware/auth');

const jwtSecret = config.get('jwtSECRET');
// @route get api/auth
// @desc get looged user 
// @access private
router.get('/', auth ,async  (req , res ) =>{

try {
    const user = await User.findById(req.user.id).select('-password');
 
    res.json(user);
    

} catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
}
});

// @route post api/auth
// @desc auth user and get token
// @access public
router.post('/',[

    check('password','password is required too').not().isEmpty(),
    check('cin','cin is required too').not().isEmpty()

] ,async (req , res ) =>{
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { cin , password  }= req.body;
        try {
            let user = await User.findOne({cin});
            if(!user ){
                return res.status(400).json({msg : 'user not exists'});
            }
            if(password !== user.password){
                return res.status(400).json({msg : 'invalid password'});
            }
            const payload ={
                user :{
                    id: user.id
                }
            }
        
            jwt.sign(payload, jwtSecret,{
                expiresIn: 36000000
            },(err, token)=>{
        
            if(err)throw err ;
            res.json({token});
            });


        } catch (err) {
            console.error(err.message);
            res.status(500).send('server error');
        }
    
    });


    

module.exports=router ;