import React, {useState, useEffect, useContext} from 'react';
import './addturn.css'
import DashboardNav from '../dashboardNav/DashboardNav'
import { UsersContext } from '../../storage/usersContext';

const AddTurn = () => {
  const context = useContext(UsersContext)
  const {client, setClient} = context.value;

  function handleChange(evt) {
    const value = evt.target.value;
    setClient({
      ...client,
      [evt.target.name]: value
    });
  }


  return (
    <>
        <header>
        <DashboardNav/>
    </header>
    <main className='dashboard__container'>
        <div className="form__container">
            <form action="">
            <label className='login-label add-turn--variation' htmlFor="email">NAME</label>
            <input className='login-input add-turn--variation' onChange={handleChange} name='name' value={client.name} type="text" />
            <label className='login-label add-turn--variation' htmlFor="email">CITIZENSHIP ID</label>
            <input className='login-input add-turn--variation' onChange={handleChange} name='id' value={client.id} type="number" />
            <button className='login-btn add-turn--variation'>Create Turn</button>
            </form>
        </div>
    </main>
    </>
  )
}

export default AddTurn