import React, { useEffect, useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {

const [Data,setData]=useState({
    name:"",
    age:"",
    email:"",
    phone:"",
    password:""
})

const navigate=useNavigate()

function handleChane (e){
setData(prev=>({
    ...prev,[e.target.name]:e.target.value
}))
}

function submit(e){
e.preventDefault()
axios.post("http://localhost:4000/users",Data)
.then(()=>{setData({
    name:"",
    age:"",
    email:"",
    phone:"",
    password:""
})
navigate('/login')
})
.catch(err=>console.log(err))
}


  return (
    <div className='main'>
      <div className='form'>
        <h2>Register</h2>
        <form onSubmit={submit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name"  value={Data.name} onChange={(e)=>handleChane(e)}/>

           <label htmlFor="age">age</label> 
          <input type="text" id="age" name="age"  value={Data.age} onChange={(e)=>handleChane(e)} />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email"  value={Data.email} onChange={(e)=>handleChane(e)} />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone"  value={Data.phone} onChange={(e)=>handleChane(e)}/>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"  value={Data.password} onChange={(e)=>handleChane(e)}/>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
