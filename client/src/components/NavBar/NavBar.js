import React, { useState, useEffect } from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { deepOrange } from '@mui/material/colors';
import {jwtDecode} from "jwt-decode"

const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate("/");
    setUser(null);// React re-render when any of its state is chnaged i.e setState is called;
  }
  useEffect(() => {
    const token=user?.token
    if(token){
      const decodedtoken=jwtDecode(token);  //This library doesn't validate the token, any well-formed JWT can be decoded. You should validate the token in your server-side logic
      if(decodedtoken.exp*1000<new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location])
  return (
    <AppBar className={classes.appBar} position="static" color="inherit" style={{ flexDirection: 'row' }}>
      <Link className={classes.link} to='/'>RecipeApp</Link>
      <Toolbar>
        {user ? (
          <div className={classes.profile}>
          <Avatar  sx={{bgcolor:deepOrange[500]}}>{user.result.name.charAt(0)}</Avatar> 
          {/* sx  property can be used for Avatar bgcolor*/}
          <Typography variant='h6'>{user.result.name}</Typography> 
          <Button variant='contained' color='primary' onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to='/auth' variant='contained' color='primary'>Register</Button>

        )}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar

// email
// : 
// "kumarayushjha123@gmail.com"
// exp
// : 
// 1706272581
// iat
// : 
// 1706268981
// id
// : 
// "65acfad8ee033ca426dd92fe"