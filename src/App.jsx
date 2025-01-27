import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Update from './components/Update'
import Read from './components/Read'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './components/Create'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {

  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
