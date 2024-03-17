import express from 'express';
import {signIn,signUp} from '../controllers/user.js';

const router=express.Router();
router.post('/signin',signIn);
router.post('/signup',signUp);

export default router;

// import express from "express";
// import {signin,signup} from '../controllers/user.js';
// const router=express.Router();

// router.post('/signin',signin);
// router.post('/signup',signup);

// export default router;