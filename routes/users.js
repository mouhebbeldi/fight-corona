const express =require('express');
const router = express.Router();
const User = require('../models/User');
// const bcrypt =require('bcryptjs');
const jwt = require ('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const config = require ('config');
const jwtSecret = config.get('jwtSECRET');

// @route post api/users
// @desc register a user 
// @access public
router.post('/',[
    
    check('name','name is required').not().isEmpty(),
    check('localisation','localisation is unique and required ').not().isEmpty(),
    check('password','password is required too').not().isEmpty(),
    check('cin','cin is required too').not().isEmpty()

  ] ,async (req , res ) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }


const {name , localisation , password ,cin }= req.body;
try {

    let user = await User.findOne({cin});
    if(user ){
        return res.status(400).json({msg : 'user already exists'});
    }

    user = new User ({
        name,
        localisation,
        password,
        cin
    });

    await user.save();

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
   }
   
   );

} catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
}
});

module.exports=router ;