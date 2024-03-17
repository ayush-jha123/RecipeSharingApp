import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';

const app=express();
app.use(cors());
app.use(express.json());//I forgot to parse incoming json data
// app.use(bodyParser.json({limit:"30mb",extended:"true"}));
// app.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}));
app.use('/user',userRoutes);
app.use('/post',postRoutes);    ///post/createpost
app.get('/',(req,res)=>{
    res.json('Hello from nodeJs Server')
})

const PORT=process.env.PORT||5000;
const url='mongodb://127.0.0.1:27017';

mongoose.connect(url)
.then(()=>app.listen(PORT,()=>console.log(`App is running at port ${PORT}`)))
.catch(err=>console.log(err.message()))
