const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
        minlength:6
    },
    gender:{
        type: String,
        required: true,
        enum:["male","female"]
    },
    photo:{
        type: String,
        default:"images.png"
    }
},{
    timestamps: true,
});

const AuthModel = mongoose.model('User', modelSchema)

module.exports = AuthModel