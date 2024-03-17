import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    name:{type:String},
    UserId:{type:String},
    title:{type:String,required:true},
    message:{type:String},
    selectedFile:{type:String},
    recipeProcess:{type:String},
    likeCount:{
        type:[String],
        default:[]
    },
    createdAt:{
        type:Date,
        default:new Date().toISOString()
    }
})

export default mongoose.model('recipe',postSchema);