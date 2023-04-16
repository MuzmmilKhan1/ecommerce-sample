import React from 'react'
import './Login.css'
import { sendPasswordReset  } from "../Firebase";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
 

export default function Forgot() {
    function resetPassword(){
        try{
            sendPasswordReset(email)
            alert("Please Also Check the spam folder of your Email account if you don't see the reset link.")
            navigate('/')
        }catch(err){
            console.log(err)
        }
    }
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
  return (
    <>
    <div className='body-login mx-auto my-5'>
        <hr></hr>
        <div className='RegLog-login my-5'>
            <h1>Reset Password</h1>
            <div className='form'>
            <label>Email:</label><br></br>
            <input placeholder='Email-login' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
            </div>
            <button className='btnforloginpage' onClick={() => resetPassword()}>Reset Now</button>
        </div>
    </div>
    </>
  )
}
