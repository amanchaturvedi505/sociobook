import React from 'react'
import "./register.css"

const Register = () => {
  return (
    <div className='login'>
    <div className="loginWrapper">
        <div className="loginleft">
            <h3 className="loginLogo">SocioBook</h3>
            <span className="loginDesc">Connect with friends and the world around you on SocioBook</span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
                <input placeholder="Email" className="loginInput" />


                <input placeholder="Password" className="loginInput" />
                <input placeholder="Re-enter Password" className="loginInput" />
                <button className="loginButton">Sign Up</button>
                
                <button className="loginRegister">
                    Log into Account 
                </button>
            </div>
        </div>
    </div>
  
</div>
  )
}

export default Register
