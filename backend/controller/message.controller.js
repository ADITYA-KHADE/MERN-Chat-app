const Conversation=require("../models/conversation.model");
const Message=require("../models/message.model");
const {getReceiverSocketId,io}=require("../sockets.io/socket")

const sendmessage = async(req, res) => {
    try {
        const receiverId=req.params.id;
        const {message}=req.body;
        const senderId=req.user._id;

        let conversation= await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        });

        if(!conversation){
            conversation=new Conversation({
                participants:[senderId,receiverId]
            })
            
        }

        const newMessage=new Message({
            senderId,
            receiverId,
            message
        });

        conversation.messages.push(newMessage._id);
        await newMessage.save();
        await conversation.save();

        const receiverSocketId = getReceiverSocketId(receiverId);
		if (receiverSocketId) {
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}

        // await promise.all([newMessage.save(),conversation.save()])

        res.status(200).send(newMessage);

    } catch (error) {
        res.status(500).send(error.message)
        console.log(error.message)
    }
}


const getmessage = async(req, res) => {
    try {
        const receiverId=req.params.id;
        const senderId=req.user._id;

        let conversation= await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        }).populate("messages");

        if(!conversation){
            return res.status(200).send([])
        }
        // const messages=conversation.messages

        res.status(200).send(conversation.messages);

    } catch (error) {
        res.status(500).send(error.message)
        console.log(error.message)
    }
}


module.exports = {sendmessage,getmessage}