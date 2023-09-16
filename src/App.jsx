import { useState } from 'react'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import MovieNew from './component/MovieNew'
import Movies from './component/Movies'
import SingleMovie from './component/SingleMovie'

function App() {


  return (
    <div>
    
      <Routes>
        <Route path='/' element={<Movies/>} />
        <Route path='/movies'>
        <Route path=':ID' element={<SingleMovie/>} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
