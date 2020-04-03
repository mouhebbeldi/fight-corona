
const express =require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app=express();
app.use(cors());



//init middleware
app.use(express.json({extented:false}));

const PORT =  process.env.PORT  || 5000;

//connection to database
connectDB();


app.use('/api/problems',require('./routes/problem'));
app.use('/api/users',require('./routes/users'));
app.use('/api/test',require('./routes/test'));
app.use('/api/auth',require('./routes/auth'));




app.listen(PORT,() =>{

    console.log('server is runnning on '+ PORT);
});

/******************************************************************************** */
