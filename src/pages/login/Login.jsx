import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginleft">
                <h3 className="loginLogo">SocioBook</h3>
                <span className="loginDesc">Connect with friends and the world around you on SocioBook</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForget">Forget Password?</span>
                    <button className="loginRegister">
                        Create a new Account 
                    </button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Login
