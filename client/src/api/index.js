import axios from 'axios';

const API=axios.create({baseURL:'http://localhost:5000'});
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})

export const signIn=(formData)=>API.post('/user/signin',formData);
export const signUp=(formData)=>API.post('/user/signup',formData);
export const createPost=(post)=>API.post('/post/createpost',post);
export const getPosts=()=>API.get('/post/getPosts');
export const updatePost=(post,id)=>API.patch(`/post/${id}`,post);
export const deletePost=(id)=>API.delete(`/post/${id}`);
export const likePost=(id)=>API.patch(`/post/likepost/${id}`);
