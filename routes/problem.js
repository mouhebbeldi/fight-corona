const express =require('express');
const router = express.Router();
const Problem = require('../models/Problem');


// @route   get api/problems
// @desc    get problems 
// @access  public
router.get('/',async (req , res ) =>{
    
try {
    const problems = await Problem.find();
    res.json(problems);
} catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
}

});


// // @route   post api/problems
// // @desc    posting a problem
// // @access  public
router.post('/' ,async (req , res ) =>{
 
  const {cin,message,place,phone  }= req.body;
    try {
        const newProblem = new Problem({
            cin,
            message,
            place,
            phone
        });
        const problem = await newProblem.save();
        res.json(problem);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
    });


module.exports=router ;