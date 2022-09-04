const mongoose =require("mongoose")
const date=new Date()

const uniqueValidator =require('mongoose-unique-validator')

const userShema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        required:true

    },
    date:{
        type:Date,
        default:Date.now()
    }
})

userShema.set("toJSON",{
    transform:(document,returnedObject)=>{
        returnedObject.id=returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject._v;
        delete returnedObject.password;
    },
});

userShema.plugin(uniqueValidator,{messge:"email Already in use"})

const User = mongoose.model("user",userShema)
module.exports=User;

 