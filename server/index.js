const express=require('express');
const mongoose=require('mongoose');
const cookieParser = require("cookie-parser");
const bodyparser=require('body-parser');
const cors=require('cors');
const path=require('path');
const methodoverride=require('method-override')
require('./config/config.js')
const app=express()
const auth =require('./middlewares/auth')
const errors=require('./middlewares/errors')
const Unless =require('express-unless')
require('./models/db')
auth.authenticaticateToken.Unless =Unless;
// app.use(
//     auth.authenticaticateToken.Unless ({
//         Path:[
//             {url:"/users/login",methods:['POST']},
//             {url:"/users/register",methods:["posT"]},
//         ],
//     })
// )
app.use(cors())
app.use(methodoverride('_method'))  
// use body-parser set json
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cookieParser()); 
app.use("/api",require("./routes/router"))
app.use(errors.errorHandler);

const port=process.env.PORT ||4000;
 
app.listen( port ,()=>console.log(`server is running on port ${port}`));

