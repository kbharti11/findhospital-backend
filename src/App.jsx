import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route,Routes } from 'react-router-dom'
import Footer from './components/Footer';
import { analytics } from './Helpers/index'
import { logEvent } from 'firebase/analytics'


function App() {

  if (analytics){
    logEvent(analytics , 'Init...')
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
