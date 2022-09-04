const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect(process.env.MONGODB_URL)
//statu of mongodb connection 
mongoose.connection.on('connected',()=>console.log(`👍 mongo db is connect  on server ${process.env.MONGODB_URL}  `,{   useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true} ))
mongoose.connection.on('error',(err)=>{
    if(err){
        console.log(`👎 mongo db is throw${err} 💀` )
    }
}) 
 