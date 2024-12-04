import { useState } from 'react'
import { Route, Routes } from 'react-router'
import pages from './pages'

const { Home, Login, Register } = pages;

function App() {

  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
