const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    participants:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    ],
    messages:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',
            default:[]
        }
    ]
},{
    timestamps: true,
});

const Conversation = mongoose.model('conversation', modelSchema)

module.exports = Conversation