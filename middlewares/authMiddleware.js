const JWT=require('jsonwebtoken')

module.exports=async (req,res,next)=>{
    try{
    const token=req.headers['authorization'].split(" ")[1]//Extract the JWT from the 'Authorization' header in the incoming request. 
    //It assumes that the token is included in the header as "Bearer <token>".
    JWT.verify(token,process.env.JWT_SECRET,(err,decode)=>{
        if(err){
            return res.status(401).send({
                success:false,
                message:"Auth Failed"
            })
        }else{
            req.body.userId = decode.userId
            next();
        }
    })
    }catch(error)
    {
        console.log(error)
        return res.status(401).send({
            success:false,
            message:"Auth Failed"
        })
    }
}