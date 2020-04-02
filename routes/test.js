const express =require('express');
const router = express.Router();
const bcrypt =require('bcryptjs');
const User = require('../models/User');
const Test = require('../models/Test');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');


// @route   get api/test
// @desc    get test of specific user
// @access  private
router.get('/', auth, async (req , res ) =>{
    
try {
    const tests = await Test.find({user:req.user.id});
    res.json(tests);
} catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
}

});


// // @route   post api/test
// // @desc    add new test to a user 
// // @access  private
router.post('/',auth, [
    check('phone', 'phone is required').isLength({ min:8, max:8 }),
    check('testResult','testResult is required').isInt({ min: 0, max: 10 })

] ,async (req , res ) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {testResult,phone  }= req.body;
    try {
        const newTest = new Test({

            phone,
            testResult,
            user:req.user.id
        });
        const test = await newTest.save();
        res.json(test);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
    });


module.exports=router ;