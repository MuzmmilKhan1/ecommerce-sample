import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logInWithEmailAndPassword } from "../Firebase";
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('password')
  const navigate = useNavigate();
  // auth1.onAuthStateChanged((user)=>{
  //   if(user){
  //     navigate('/')
  //   }
  // })

  function symbol(){
    setType('')
  }

  function LoginwithEmail(){
    try{
      logInWithEmailAndPassword(email, password).then(() => {
        // Navigate to home page upon successful login
        navigate('/');
        alert("Congrats You have logged In");
      }).catch(err => {
        console.log(err)
      });
    } catch(err){
      console.log(err)
    }
  }

  return (
    <div className='body mx-auto'>
      <div className='RegLog'>
        <h3>Welcome</h3>
        <div className='form'>
          <label>Email:</label><br></br>
          <input placeholder='Email' value={email} autoComplete='on'
            onChange={(e)=>{setEmail(e.target.value)}} required={true}></input><br></br>
          <label>Password:</label><br></br>
          <input placeholder='Password' autoComplete='on'
            value={password} type={type} onChange={(e)=>{setPassword(e.target.value)}} required={true}>
          </input>
          <i className="symbol bi bi-eye " onClick={()=> symbol()}></i>
        </div>
        <button className='btnforloginpage' onClick={() => LoginwithEmail()}>Login</button>
        <Link className='btnforloginpage' to='/resetPassword'> Forgot Password? </Link>
        <Link to="/register" className='a'>Register Now</Link>
      </div>
    </div>
  )
}

export default Login;
