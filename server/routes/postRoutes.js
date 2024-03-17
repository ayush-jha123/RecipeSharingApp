import express from 'express';
import {createPost,getPosts,updatePost,deletePost,likePost} from '../controllers/post.js';
import { Auth } from '../middleware/auth.js';
const router=express.Router();

router.post('/createpost',Auth,createPost);
router.patch('/:id',updatePost)
router.get('/getPosts',getPosts)
router.delete('/:id',deletePost);
router.patch('/likePost/:id',Auth,likePost);

export default router;