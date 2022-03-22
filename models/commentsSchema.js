import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    names:{
        type:'String',
        required:true
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
       
    },
   comment:{
        type:'String',
        required:true
    }
})

export default new mongoose.model('comment', commentSchema)