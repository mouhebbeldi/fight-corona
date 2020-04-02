
const express =require('express');
const connectDB = require('./config/db');

const path =require('path');


const app=express();

//init middleware
app.use(express.json({extented:false}));

const PORT =  process.env.PORT  || 5000;

//connection to database
connectDB();



app.use('/api/users',require('./routes/users'));
app.use('/api/contacts',require('./routes/contacts'));
app.use('/api/auth',require('./routes/auth'));



//static folder 



app.listen(PORT,() =>{

    console.log('server is runnning on '+ PORT);
});

/******************************************************************************** */
