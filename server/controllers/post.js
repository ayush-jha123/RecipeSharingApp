import post from "../models/post.js";
import mongoose from "mongoose";

export const createPost=async (req,res)=>{
    const data=req.body;
    try {
        const result=await post.create({...data,createdAt:new Date().toISOString(),UserId:req.userId});
        return res.status(200).json(result);
    } catch (error) {
       return res.status(500).json({message:'something went wrong'})
    }
}

export const getPosts=async (req,res)=>{
    try {
        const result=await post.find();
        return res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message:'something went wrong'});
    }
}

export const updatePost=async (req,res)=>{
    try {
        const {id:_id}=req.params;
        const data=req.body;
        
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json('No any object found');
        const updatedPost=await post.findByIdAndUpdate(_id,{...data,_id},{new:true});
        
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({message:'something went wrong'})
    }
}

export const deletePost=async (req,res)=>{
    try {
        const {id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message:"Post doesn't exists"});
        await post.findOneAndDelete({_id:id});
        return res.status(200).json({message:'Recipe is deleted successfully'});
    } catch (error) {
        res.status(500).json({message:'something went wrong'})
    }
}

export const likePost=async (req,res)=>{
    try {
        const {id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message:'Post is not present'});
        const prevPost=await post.findById(id);
        const index=prevPost.likeCount.findIndex((id)=>id===req.userId);
        if(index==-1){
            prevPost.likeCount.push(req.userId);// push() add item at end of array
        }else{
            prevPost.likeCount=prevPost.likeCount.filter((id)=>id!==req.userId)
        }
        const updatedPost=await post.findByIdAndUpdate(id,prevPost,{new:true});
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({message:'something went wrong'});
    }
}

// {title: 'test', message: 'test', selectedFile: '', recipeProcess: '', name: 'Ayush Kumar Jha'}