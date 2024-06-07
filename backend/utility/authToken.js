const jwt=require("jsonwebtoken")

const authTokenGenerate=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"1d"})
    res.cookie("_id",token,{expiresIn:"1d", httpOnly:true})
}

module.exports=authTokenGenerate

// const authTokenVerify=(req,res,next)=>{
//     const token=req.cookies._id;
//     if(!token){
//         return res.status(401).json({message:"Unauthenticated"})
//     }
//     try {
//         const verifyToken=jwt.verify(token,process.env.JWT_SECRET)
//         req.userId=verifyToken.userId
//         next();
//     } catch (error) {
//         return res.status(401).json({message:"Unauthenticated"})
//     }
// }