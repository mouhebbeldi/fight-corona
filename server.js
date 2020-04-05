
const express =require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app=express();
const path = require('path');
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

// serve static assets in production 
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req, res )=>
        res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html')));
}


app.listen(PORT,() =>{

    console.log('server is runnning on '+ PORT);
});

/******************************************************************************** */
