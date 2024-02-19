import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
 <h1>labas</h1>
 <Routes>
  <Route path='/home' element={<p>Hey</p>}/>
 </Routes>
    </>
  )
}

export default App
