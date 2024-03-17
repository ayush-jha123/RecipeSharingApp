import { Paper, Typography,Grid,CircularProgress,Divider, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import useStyles from './style'
import moment from 'moment'

const PostDetails = () => {
  const posts=useSelector(state=>state.posts[0])
  const {id}=useParams();
  const [post,setPost]=useState(null)
  useEffect(()=>{
     setPost(posts?.filter(post=>post._id===id)[0])
  },[posts,id])
  const classes=useStyles();
  // console.log(post)
  return (
    <>
    {post?
    (<Paper className={classes.main} elevation={5} sx={{borderRadius:'15px'}}>
      <Grid className={classes.content}>
        <Grid className={classes.About} sx={{flexDirection:'column'}}> 
          <Typography variant='h2' >{post.title}</Typography>
          <Typography variant='subtitle1'>{post.name}</Typography>
          <Typography variant='subtitle2'>{moment(post.createdAt).fromNow()}</Typography>
          <Typography variant='h4'>Message From Author:</Typography>
          <Typography variant='body1' sx={{marginRight:'30px'}}>{post.message}</Typography>
        </Grid>
        <Grid className={classes.image}>
          <img src={post.selectedFile} style={{width:'95%',height:'388px',borderRadius:'10px'}}/>
        </Grid>
      </Grid>
      <Divider sx={{margin:'10px'}}/>
      <Container sx={{paddingLeft:'4px', paddingTop:'20px'}}>
        <Typography variant='h4'>Recipe Process:</Typography>
        <div dangerouslySetInnerHTML={{__html:post.recipeProcess}}/>
      </Container>
    </Paper>):(
      <CircularProgress/>
    )
  }
    </>
  )
}

export default PostDetails

