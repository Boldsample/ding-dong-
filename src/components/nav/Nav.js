import React from 'react'
import './nav.css'
import logo from '../../imgs/logo-Movista.png'

const Nav = () => {
    const date = new Date();
    const time = date.toLocaleTimeString();

  return (
    <nav className='status-board__nav'>
        <div className="logo__container">
            <img src={logo} alt="" width='200px' />
        </div>
        <div className="date-and-time__container">
            <p>{date.toDateString()}</p>
            <p>{time}</p>
        </div>
        </nav>
  )
}

export default Nav