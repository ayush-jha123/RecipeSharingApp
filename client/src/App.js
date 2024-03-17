import React from 'react'
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import Auth from './components/Auth/Auth';
import Editor from './components/Editor/Editor';
import PostDetails from './components/PostDetails/PostDetails';
const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth='lg'>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/auth' element={<Auth />} />
                    <Route path='/createPost' element={<Editor/>}/>
                    <Route path='/posts/:id' element={<PostDetails/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App