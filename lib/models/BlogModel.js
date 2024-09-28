import mongoose, { Schema } from "mongoose";


const blogSchema = new mongoose.Schema({
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
        required: true,
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


const BlogModel = mongoose.models.blog || mongoose.model('blog',blogSchema);

export default BlogModel;