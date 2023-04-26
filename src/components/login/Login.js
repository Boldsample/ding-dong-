import React from 'react'
import "./login.css";
import loginImg from '../../imgs/dingdong.jpg'
import logo from '../../imgs/ding-dongLogo.svg'
   
const Login = () => {
  return (
    <div className='login-container'>
        <div className="login-image__container">
            <div className="login-text__container">
                <p className='login-text'>Ding-Dong is an app designed to streamline the turn management process in customer experience centers.</p>
                <button className='login-btn --back-btn'>Back to waiting board</button>
            </div>
        </div>
        <div className="login-card">
            <form className='login-form' action="">
                <img className='login-logo' src={logo} alt="" width='150px' />
                <div className="login-label__container"></div>
            <label className='login-label' htmlFor="email">EMAIL</label>
            <input className='login-input' type="text" />
            <label className='login-label' htmlFor="email">PASSWORD</label>
            <input className='login-input' type="text" />
            <button className='login-btn'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login