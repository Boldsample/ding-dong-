import React from 'react'
import AttendingList from '../attendingList/AttendingList'
import './statusboard.css'

const StatusBoard = () => {
  return (
    <>
    <div className='status-board__container'>
        <section className='nav-main-section'>
        <nav className='status-board__nav'>
            <h1>nav</h1>
        </nav>
        <main className='status-board__main'>
            <h1>main</h1>
        </main>
        </section>
        <aside className='attending-list__container'>
        <AttendingList/>
        </aside>
    </div>
    <footer>
            <h1>footer</h1>
        </footer>
    </>
    
  )
}

export default StatusBoard