const User = require('../models/user.model')
const bcrypt =require('bcryptjs')
const auth = require("../middlewares/auth");


async function login({email,password},callback){
    const user =await User.findOne({email});
    if(user !=null){
        if(bcrypt.compareSync(password,user.password)){
            const token = auth.generteAccessToken(email);
            console.log("key",token)
            return callback(null,{token});

        }
        else{   
            return callback({ 
                message:"invalid user/passwoed!!!"
            })
        }
    }
    else{
        return callback({
            message:"invalid user/pass"
        })
    }
}
async function register(params,callback){
    if(params.username ===undefined){
        return callback({
            message:"invalid user requst"
        })

    }
    const user =new User(params);
    user.save(function(err,data){
        if(err){
            console.log(err)
        }
        return callback(null,data)
    }) 
    // .this((response)=>{
    //     return callback(null,response)
    // })
    // .catch((error)=>{
    //     return callback(null,error)
    // })
}

module.exports={
    login,
    register
}