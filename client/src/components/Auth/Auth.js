import React, { useState,useEffect } from 'react'
import { Paper, Avatar, Grid, Typography, Container, form, TextField, Button, Link } from '@mui/material';
import HttpsIcon from '@mui/icons-material/Https';
import useStyle from './styles';
import {signUp} from '../../actions/user';
import {signIn} from '../../actions/user';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const user = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
  const clientId=""
  const classes = useStyle();
  const [userData,setUserData]=useState(user);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleChange=(e)=>{
      setUserData({...userData,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(isSignUp){
      dispatch(signUp(userData,navigate));
    }else{
      dispatch(signIn(userData,navigate));
    }
  }


  const switchMode=()=>{
    // setIsSignUp(!isSignUp);
    setIsSignUp(prevIsSignUp => !prevIsSignUp);
    
  }

  return (
    <Container maxWidth='xs' component='main'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar>
          <HttpsIcon />
        </Avatar>
        <Typography variant='h6'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.formData} onSubmit={handleSubmit}>
          {isSignUp && (
            <div className={classes.text}>
              <TextField name='firstName' fullWidth type='text' label='First Name' onChange={handleChange} />
              <TextField name='lastName' fullWidth type='text' label='Last Name' onChange={handleChange} />
            </div>
          )}
          <TextField name='email' fullWidth type='email' label='Email Id' onChange={handleChange} />
          <TextField name='password' fullWidth type='password' label='Password' onChange={handleChange} />
          {isSignUp && (
            <div className={classes.text2}>
              <TextField name='confirmPassword' fullWidth type='password' label='Confirm Password' onChange={handleChange} />
              <Button onClick={switchMode}>
              {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
              </Button>
            </div>
          )}
          <Button type='submit' variant='contained'>Submit</Button>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth;

//clientId= 66996932244-0mgme7gjmpj8olg3309v4qucckv9s7jj.apps.googleusercontent.com
//clientId= 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