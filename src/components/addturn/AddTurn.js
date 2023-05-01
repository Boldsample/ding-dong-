import React from 'react'
import './addturn.css'
import DashboardNav from '../dashboardNav/DashboardNav'

const AddTurn = () => {
  return (
    <>
        <header>
        <DashboardNav/>
    </header>
    <main className='dashboard__container'>
        <div className="form__container">
            <form action="">
            <label className='login-label add-turn--variation' htmlFor="email">NAME</label>
            <input className='login-input add-turn--variation' type="text" />
            <label className='login-label add-turn--variation' htmlFor="email">CITIZENSHIP ID</label>
            <input className='login-input add-turn--variation' type="text" />
            <button className='login-btn add-turn--variation'>Create Turn</button>
            </form>
        </div>
    </main>
    </>
  )
}

export default AddTurn