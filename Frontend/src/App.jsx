import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import Home from './Pages/Home';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/Success';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notfound' element={<NotFound/>} />
          <Route path='/success' element={<Success/>} />
        </Routes>
        <Toaster />
      </Router>
    </>
  )  
}

export default App