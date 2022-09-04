const bcryptjs=require('bcryptjs')
const userService =require('../services/users.services')
const dayjs = require("dayjs");

exports.register= (req,res,next)=>{
    console.log('register')
    const {password} =req.body;
    const salt =bcryptjs.genSaltSync(10);

    req.body.password=bcryptjs.hashSync(password,salt)
    userService.register(req.body,(error,result)=>{
        if(error){
            return next(error);
        }
        return res.status(200).send({
            message:"Sucess",
            data:result,
        });
    })
}


exports.login= (req,res,next)=>{
    console.log('login')
    const {email,password} =req.body;

      userService.login({email,password},(error,result)=>{
        if(error){
            return next(error);
        }
        console.log('token',result)
        res.cookie('token',result.token, {
            secure: false,
            httpOnly: true,
            expires: dayjs().add(1, "days").toDate(),
          });
        return res.status(200).send({
            message:"Sucessd",
            token:result.token

        });
    })
}
exports.logout=(req,res,next)=>{
    console.log('logout')
    res.clearCookie("token")

}
exports.userProfil=(req,res,next)=>{
    console.log('userprofil')
    return res.status(200).json({message:"Authorized User!"})
}
