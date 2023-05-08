import React, {useState, useEffect, useContext} from 'react'
import './manageturns.css'
import DashboardNav from '../dashboardNav/DashboardNav'
import Turn from '../turn/Turn'
import { UsersContext } from '../../storage/usersContext'

const ManageTurns = () => {
    const context = useContext(UsersContext)
    const {client, setClient, handleSave, clientList} = context.value;
  return (
    <>
    <header>
        <DashboardNav/>
    </header>
    <main className='dashboard__container'>
        <table>
            <thead>
                <td className='table__title'>Name</td>
                <td className='table__title'>ID</td>
                <td className='table__title'>Support Time</td>
                <td className='table__title'>Status</td>
                <td className='table__title'>Actions</td>
            </thead>
                <tbody className='table__body'>
                   {clientList.map((client)=> <Turn client={client}/>)}
                </tbody>
        </table>
    </main>

    </>
  )
}

export default ManageTurns