import { useState } from 'react'
import './App.css'
import {  Routes, Route } from 'react-router-dom';
import Register from './Register.jsx'
import Login from './Login.jsx'
import Home from './Home.jsx'

function App() {
 
return (
<Routes>
  <Route path='/' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/home' element={<Home/>}/>
</Routes>
)
 
}

export default App
