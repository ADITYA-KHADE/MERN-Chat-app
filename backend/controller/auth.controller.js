
// Importing the AuthRoutes model
const User = require('../models/auth.model')
const bcrypt=require("bcryptjs");
const authTokenGenerate=require("../utility/authToken.js")

const signup =async(req, res) => {
    try {
       const {fullname,username,password,confirmpassword,gender}=req.body;

       if(password!==confirmpassword){
            return res.status(400).json({message:"Password does not match"})
       }

       const user=await User.findOne({username});
       if(user){
            return res.status(400).json({message:"Username already exists"})
       }

         const salt=await bcrypt.genSalt(10);
        const hashpassword=await bcrypt.hash(password,salt);

        const newUser =new User({
              fullname,
              username,
              password:hashpassword,
              gender,
        })

        await newUser.save();
        if(newUser){
            authTokenGenerate(newUser._id,res);
            res.status(201).json({
                _id:newUser._id,
                username:newUser.username,
                message:"User registered successfully"})
        }else{
            res.status(400).json({message:"User not registered"})
        }

    } catch (error) {
        res.status(500).send(error.message)
        console.log(error.message)
    }
}

const login = async(req, res) => { 
    try {
        const {username,password}=req.body;
        const user=await User.findOne({username});
        if(!user){
            return res.status(400).json({message:"User not found"})
        }
        const isMatch=await bcrypt.compare(password,user.password);
       
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"})
        }
        authTokenGenerate(user._id,res);
        res.status(200).json({message:"User logged in successfully"})
    } catch (error) {
        res.status(500).send(error.message)
        console.log(error.message)
    }
}

const logout = async(req, res) => {
    try {
        res.clearCookie("_id");
        res.status(200).json({message:"User logged out successfully"})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    signup,
    login,
    logout
}
