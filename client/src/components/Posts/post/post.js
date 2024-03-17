import React, { useEffect } from 'react'
import { Card, CardContent, CardMedia, CardActions, CardHeader, Avatar, Typography, ButtonBase, CardActionArea, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import moment from 'moment';
import { deletePost, likePost, getPosts } from '../../../actions/posts';
import { useDispatch } from 'react-redux';
const Post = ({ post, postId, setPostId }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  useEffect(() => {
    if (postId) {
      // Navigate to the "/createPost" route with the new postId
      console.log(postId)
      navigate("/createPost", { state: { postId } });
    }
  }, [postId, navigate]);

  const handleEditor = () => {
    setPostId(post._id);
    // console.log(postId)  As PostId is not immediately setup
    // navigate("/createPost", { state: {postId} });
  }
  const openpost = () => {
    navigate(`/posts/${post._id}`);
  }
  const handleDelete = async () => {
    if (post) {
      await dispatch(deletePost(post._id));
      dispatch(getPosts());
    }
  }
  const handleLikes = async () => {
    await dispatch(likePost(post._id));   // await will make sure that untill promise doesn't resolve you need to wait i.e not to move in next line.
    dispatch(getPosts());
  }
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'orange' }}>
            {post.name.charAt(0)}
          </Avatar>
        }
        action={
          (user?.result._id === post.UserId || user?.result?.googleId===post.UserId) && (
            <IconButton onClick={handleEditor}>
              <MoreVertIcon />
            </IconButton>
          )}
        title={post.name}
        subheader={moment(post.createdAt).fromNow()}
      />
      <CardActionArea onClick={openpost}>   {/*CardActionArea is used to make whole card clickable*/}
        <CardMedia
          component="img"
          image={post.selectedFile}
          height='200'
        />
        <CardContent>
          <Typography variant='h6'>
            {post.title}
          </Typography>
          <Typography variant='body2' component='div' style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 4 }}>
            {post.message}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {(user?.result._id === post.UserId || user?.result?.googleId===post.UserId) && <Button onClick={handleDelete} disabled={!user.result}>
          <DeleteIcon />
          Delete
        </Button>}
        {post.likeCount.length ?
          (<Button onClick={handleLikes}>
            <ThumbUpAltIcon />
          </Button>) : (
            <Button onClick={handleLikes}>
              <ThumbUpOffAltIcon />
            </Button>
          )
        }
      </div>
    </Card>
  )
}

export default Post