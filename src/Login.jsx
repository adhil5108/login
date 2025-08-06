import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
const naviagte=useNavigate()
function handle(e){
e.preventDefault()
naviagte('/home')
}

  return (
    <div className='main'>
      <div className='form'>
        <h2>Login</h2>
        <form onSubmit={handle}>
          <label htmlFor="email">name</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
