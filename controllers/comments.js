import messageSchema from "../models/commentsSchema.js";


const createComment = async(req, res) => {
    try {
      const messages =  await messageSchema.create({
            names: req.body.names,
            email: req.body.email,
            project: req.body.project,
            message: req.body.message
        })
        res.status(200).json({
            message: 'message successfully sent',
            result:messages
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
        
    }
}

const getComments = async(req, res) => {
    try {
        const allMessages = await messageSchema.find({})
        res.status(200).json({
            message: "messages displayed",
            result:allMessages
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}
const getComment = async(req,res)=>{
    try {
       let id = req.params.id;
       const message = await messageSchema.findById(id)
       res.status(200).json({
           message:"the message is displayed",
           result:message
       }) 
    } catch (error) {
        res.status(500).json({
            message:error
        })
    }
}


const deleteComment = async(req,res)=>{
    try {
        let id = req.params.id;
        await messageSchema.findByIdAndRemove(id)
        res.status(200).json({
            message:"message deleted."
        })
    } catch (error) {
        res.status(500).json({
            message:"message not deleted."
        })
    }
}
export {createComment, getComments, getComment, deleteComment}