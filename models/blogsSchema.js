import mongoose from 'mongoose';




const articleSchema = new mongoose.Schema({
    title: { type: String, required: true},
    content: { type: String, required: true},
    body: { type: String, required: true},
    imageUrl: { type: String }, 
    userId: { type: String},
    avatar: { type: String},
   cloudinary_id: { type: String},
//    comments: [{

//     type: mongoose.Schema.Types.ObjectId,
//     ref: "comment"
// }]
});

const article = mongoose.model("article", articleSchema)


export default article;