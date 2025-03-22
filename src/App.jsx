import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Componets/Navbar'
import Header from './Componets/Header'
import About from './Componets/About'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Header />}></Route>
        <Route path='about' element={ <About /> } ></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
