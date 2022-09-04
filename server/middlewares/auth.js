const jwt =require("jsonwebtoken")

function authenticaticateToken(req,res,next){
    const authHeader =req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token ==null) return res.sendStatus(401);

    jwt.verify(token,"Snipped_SceretKEY",(err,user)=>{
        if(err) return res.sendStatus(403);
        next();
    });
}

function generteAccessToken(username){
    return jwt.sign({username:username},"Snipped_SceretKEY",{
        expiresIn :'1h',
    })
}

const config = process.env;

function verifyToken(req, res, next){
  console.log('verified')
  const token =
    req.body.token || req.cookies["token"] ;
    console.log( req.cookies["userkey"])

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token,"Snipped_SceretKEY");
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports={authenticaticateToken,generteAccessToken,verifyToken};