import React, { useEffect, useState } from 'react'
import { Container, TextField, Grid, Button } from '@mui/material';
import FileBase from 'react-file-base64';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch ,useSelector} from 'react-redux';
import useStyle from './style';
import {useNavigate,useLocation} from'react-router-dom';
import {createPost,updatePost} from '../../actions/posts';
const Editor = () => {
  const item = { title: '', message: '', selectedFile: '', recipeProcess: '' };
  const [recipe, setRecipe] = useState(item);
  const user=JSON.parse(localStorage.getItem('profile'));
  const location=useLocation();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {postId,setPostId}=location.state||{};
  // console.log(postId)
  const existingPost=useSelector(state=>postId?state.posts[0]?.find((p)=>p._id==postId):null)
  // console.log(existingPost)
  useEffect(()=>{
    if(postId && existingPost){
      const updatedRecipe = {
        title: existingPost.title,
        message: existingPost.message,
        selectedFile: existingPost.selectedFile,
        recipeProcess: existingPost.recipeProcess,
      };
      setRecipe(updatedRecipe);
    }
  },[existingPost,postId])
  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(postId){
      dispatch(updatePost({...recipe,name:user.result.name},postId));
    }
    else{
      dispatch(createPost({...recipe,name:user.result.name}));
    }
    navigate("/");
  }
  const classes = useStyle();
  return (
    <Container>
      <form onSubmit={handleSubmit}>
      <Grid className={classes.Form} direction={'column'} spacing={3}>
        <TextField label='Recipe Name' name='title' value={recipe.title} onChange={handleChange} />
        <TextField label='Discription' name='message' value={recipe.message} onChange={handleChange} />
        <div>
          <FileBase type='file' multiple={false} onDone={({ base64 }) => setRecipe({ ...recipe, selectedFile: base64 })} />
        </div>
        <ReactQuill theme="snow"  value={recipe.recipeProcess} readOnly={true} onChange={(process) => setRecipe({ ...recipe, recipeProcess: process })} />  {/*The ReactQuill component provides the content directly as an argument to its onChange callback; you don't need to use e.target.value  */}
        <Button type='submit' variant='contained' >Submit</Button>
      </Grid>
      </form>
    </Container>
  )
}

{/* <div className={classes.fileInput}> <FileBase type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /> </div> */}

export default Editor