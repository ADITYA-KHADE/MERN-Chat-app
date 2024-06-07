const mongoose = require('mongoose');
const connectdb = async ()=>{
    try{
        const connect=await mongoose.connect(process.env.MONGO_DB_URL,{
        });
        console.log("connected at:",
            connect.connection.host,
            connect.connection.name,
            );
    } 
    catch(err){
        console.log(err);
    }
}

module.exports = connectdb;

