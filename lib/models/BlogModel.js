import mongoose from "mongoose";
import { type } from "os";
import { title } from "process";

const Schema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    firstSegment:{
        type: String,
        required: true
    },
    secondSegment:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: false,
    },
    thumbnailImage:{
        type: String,
        required: false,
    },  
    image:{
        type: String,
        required: true,
    },
    authorImg:{
        type: String,
        required: false,
    },
    date:{
        type: Date,
        default:Date.now()
    },

})

const BlogModel = mongoose.models.blog || mongoose.model('blog',Schema);

export default BlogModel;