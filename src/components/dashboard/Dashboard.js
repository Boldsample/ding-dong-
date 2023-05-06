import React from 'react'
import statusBoard from '../../imgs/clock.png'
import manageTurn from '../../imgs/pen.png'
import addTurn from '../../imgs/speech_bubble.png'
import './dashboard.css'
import DashboardNav from '../dashboardNav/DashboardNav'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
    <header>
    <DashboardNav/>
    </header>
    <main className='dashboard__container'>
      <div className="links__container">
        <div className="small-links__container">
      <Link to='/statusboard' className='small__container'>
          <img src={statusBoard} alt="" width='150px' />
          <h2>Status Board</h2>
        </Link>
        <Link to='/addturn' className='small__container'>
          <img src={addTurn} alt="" width='150px' />
          <h2>Add Turn</h2>
        </Link>
        </div>
        <Link to='/manageturns' className='large__container'>
          <img src={manageTurn} alt="" width='150px' />
          <h2>Manage Turns</h2>
        </Link>
      </div>

    </main>
    </>
  )
}

export default Dashboard