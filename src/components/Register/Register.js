import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { registerWithEmailAndPassword } from '../Firebase';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');

  function symbol() {
    setType('');
  }

  const navigate = useNavigate();


  const register = () => {
    if (!name) alert('Please enter name');
    try {
      registerWithEmailAndPassword(name, email, password);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='body-Register mx-auto my-5'>
        <div className='RegLog-Register my-5'>
          <h3>Welcome</h3>
          <div className='form-Register'>
            <label>Name:</label>
            <br></br>
            <input placeholder='Your Name' value={name} onChange={e => setName(e.target.value)}></input>
            <br></br>
            <label>Email:</label>
            <br></br>
            <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}></input>
            <br></br>
            <label>Password:</label>
            <br></br>
            <input placeholder='Password' type={type} value={password} onChange={e => setPassword(e.target.value)}></input>
            <i className='symbol bi bi-eye ' onClick={() => symbol()}></i>
          </div>
          <button className='btn-Register' onClick={register}>
            Register
          </button>
          <Link to='/login' className=' my-2'>
            Already a Member?
          </Link>
        </div>
      </div>
    </>
  );
}
