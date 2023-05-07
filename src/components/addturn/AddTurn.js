import React, {useState, useEffect, useContext} from 'react';
import './addturn.css'
import DashboardNav from '../dashboardNav/DashboardNav'
import { UsersContext } from '../../storage/usersContext';

const AddTurn = () => {
  const context = useContext(UsersContext)
  const {client, setClient, handleSave, assignModuleToPerson, modules} = context.value;

  function handleChange(evt) {
    const value = evt.target.value;
    setClient({
      ...client,
      [evt.target.name]: value,
      countdown: 60,
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
            <button className='login-btn add-turn--variation' onClick={(e)=>{
              e.preventDefault()
              handleSave()
              client.startCountdown()
              const success = assignModuleToPerson(client, modules);
              if (success) {
                console.log(`Module ${client.module.id} assigned to ${client.name}`);
              } else {
                console.log('No available modules');
              }
            
            }}>Create Turn</button>
            </form>
        </div>
    </main>
    </>
  )
}

export default AddTurn