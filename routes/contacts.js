const express =require('express');
const router = express.Router();
const bcrypt =require('bcryptjs');
const User = require('../models/User');
const Contact = require('../models/Contact');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');


// @route   get api/contacts
// @desc    get all users contacts
// @access  private
router.get('/', auth, async (req , res ) =>{
    
try {
    const contacts = await Contact.find({user:req.user.id}).sort({date:-1});
    res.json(contacts);
} catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
}

});


// @route   post api/contacts
// @desc    add new contact
// @access  private
router.post('/',auth, [

    check('name', 'name is required').not().isEmpty()
] ,async (req , res ) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {name, email,phone , type }= req.body;
    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user:req.user.id
        });
        const contact = await newContact.save();
        res.json(contact);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
    });


// @route   put api/contacts/:id
// @desc    update contact
// @access  private
router.put('/:id',auth , (req , res ) =>{

    res.send('updated contact');

});

// @route   delete api/contacts/:id
// @desc    delete contact
// @access  private
router.delete('/:id',auth, (req , res ) =>{

    res.send('delete contact ');
  
});
module.exports=router ;