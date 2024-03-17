import React from 'react';
import { Grid } from '@mui/material';
import useStyles from './style';
import { useSelector } from 'react-redux';
import Post from './post/post';
const Posts = ({postId,setPostId}) => {
  const classes = useStyles();
  const posts = useSelector(state => state.posts)
  console.log('post')
  console.log(posts)
  const newposts = posts.length > 0 ? posts[0] : [];
  return (
    <Grid container spacing={2} className={classes.Cards} sx={{marginTop:'10px'}}>
      {newposts.map(post => (
        <Grid item xs={12} md={6} lg={4} >
          <Post post={post} postId={postId} setPostId={setPostId}/>
        </Grid>
      ))}
    </Grid>
  )
}

export default Posts