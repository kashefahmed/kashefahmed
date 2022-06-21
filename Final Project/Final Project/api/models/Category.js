import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        title: {
        type:String,
        required:true,
        uinque:true,
        },
        description:{
            type:String,
        },
        image:{
            type:String,
            required:false
        },
        createdAt:{
            type:String,
            default:Date.now()
        }
    }
)