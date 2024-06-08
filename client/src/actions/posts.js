import * as api from '../api';
import {CREATE,FETCH_ALL_POSTS,UPDATE,DELETE} from '../constants/actionTypes';
export const createPost=(post)=>async (dispatch)=>{
    try {
        const {data}=await api.createPost(post);
        dispatch({type:CREATE,payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const getPosts=()=>async (dispatch)=>{
    try {
        const {data}=await api.getPosts();
        console.log(data);
        dispatch({type:FETCH_ALL_POSTS,payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost=(post,id)=>async(dispatch)=>{
    try {
        const {data}=await api.updatePost(post,id);
        dispatch({type:UPDATE,payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const deletePost=(id)=>async(dispatch)=>{
    try {
        await api.deletePost(id);
        dispatch({type:DELETE,payload:id});
    } catch (error) {
        console.log(error)
    }
}

export const likePost=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.likePost(id);
        dispatch({type:UPDATE,payload:data});
    } catch (error) {
        console.log(error);
    }
}

