import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    names:{
        type:'String',
        required:true
    },
    project:{
        type:'String',
        required:true
    },
   email:{
        type:'String',
        required:true
    },
   message:{
        type:'String',
        required:true
    }
})

export default new mongoose.model('messages', messageSchema)