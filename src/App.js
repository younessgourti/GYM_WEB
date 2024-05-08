import React from 'react';
import { Route,Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Home } from '@mui/icons-material';


import './App.css ';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import footer from './components/footer';
const App = () => {
  return (
    <Box width="400px" sx={{ width:{ xl:'1488px'}}} m="auto">
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/exercise/:id' element={ <ExerciseDetail />} />
        </Routes>
        <Footer />
        
        </Box>
  )
}

export default App