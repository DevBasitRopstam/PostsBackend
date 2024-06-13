
import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    desciption: String,
    selectedFile: String,
    //  createdAt: {
    //     type: Date,
    //     default: Date.now
    // }

}, { timestamps: true});


const Posts = mongoose.model('Posts', postSchema);

export default Posts;