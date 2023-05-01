import React from 'react'
import './dashboardnav.css'
import logo from '../../imgs/ding-dongLogo.svg'

const DashboardNav = () => {
  return (
    <nav className='dashboard__nav'>
    <img src={logo} alt="" />
    <button className='login-btn'>Log Out</button>
    </nav>
  )
}

export default DashboardNav