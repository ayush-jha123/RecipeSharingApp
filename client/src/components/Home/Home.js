import React, { useEffect, useState } from 'react'
import Posts from '../Posts/Posts'
import { Container, Button, Grid } from '@mui/material';
import useStyle from './style';
import CreateIcon from '@mui/icons-material/Create';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts';

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyle();
  const [postId, setPostId] = useState(null);
  const user = JSON.parse(localStorage.getItem('profile'));
  useEffect(() => {
    console.log('getDispatch')
    dispatch(getPosts());
  }, [dispatch])

  return (
    <Container component='main' className={classes.main} sx={{ display: 'flex' }}>
      <Grid className={classes.button}>
        <Button component={Link} to={{ pathname: '/createPost', state: { postId, setPostId } }} disabled={!user?.result} variant='contained' size='small' endIcon={<CreateIcon />}>Share Your Recipe</Button> {/*startIcon and endIcon are used to add icons in button */}
      </Grid>
      {/* <Posts style={{ margin: '2px auto' }} posts={posts}/> */}
      <Posts style={{ margin: '2px auto' }} postId={postId} setPostId={setPostId} />
    </Container>
  )
}

export default Home