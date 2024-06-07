
const User = require('../models/auth.model');
const getUserBySidebar=async (req,res) =>{
    try {
        
        const logginUserId=req.user._id;

        const alluser=await User.find({_id:{$ne: logginUserId}}).select("-password");
        res.json(alluser);

    } catch (error) {
        res.status(500).send(error.message)
        console.log(error.message)
    }
}

module.exports=getUserBySidebar;