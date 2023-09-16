import { useState } from 'react'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import Movies from './component/Movies'
import SingleMovie from './component/SingleMovie'

function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/singleMovie/:movieID' element={<SingleMovie/>} />
        <Route path='/' element={<Movies/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
