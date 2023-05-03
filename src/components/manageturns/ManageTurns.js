import React from 'react'
import './manageturns.css'
import DashboardNav from '../dashboardNav/DashboardNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const ManageTurns = () => {
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
                    <tr>
                        <td><FontAwesomeIcon className='icon-styles' icon={faUser}/> Juan Jacobo Viera</td>
                        <td>8583892</td>
                        <td>1:51</td>
                        <td>
                        <p className='module-style'>Module 2</p>
                        </td>
                        <td><button className='table__btn'><FontAwesomeIcon icon={faClock}/></button><button className='table__btn'><FontAwesomeIcon icon={faClose}/></button></td>
                        
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon className='icon-styles' icon={faUser}/> Juan Jacobo Viera</td>
                        <td>8583892</td>
                        <td>1:51</td>
                        <td>
                            <p className='module-style'>Module 1</p>
                        </td>
                        <td><button className='table__btn'><FontAwesomeIcon icon={faClock}/></button><button className='table__btn'><FontAwesomeIcon icon={faClose}/></button></td>
                    </tr>
                </tbody>
        </table>
    </main>

    </>
  )
}

export default ManageTurns