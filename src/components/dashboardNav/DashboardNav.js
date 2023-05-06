import React from 'react'
import './dashboardnav.css'
import logo from '../../imgs/ding-dongLogo.svg'
import { Link } from 'react-router-dom'

const DashboardNav = () => {
  return (
    <nav className='dashboard__nav'>
    <img src={logo} alt="" />
    <Link to='/'><button className='login-btn'>Log Out</button></Link>
    </nav>
  )
}

export default DashboardNav