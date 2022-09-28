import mongoose from 'mongoose';




const jobSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},

//     userId: { type: String},
//     avatar: { type: String},
//    cloudinary_id: { type: String},
//    comments: [{

//     type: mongoose.Schema.Types.ObjectId,
//     ref: "comment"
// }]
});

const job = mongoose.model("job", jobSchema)


export default job;