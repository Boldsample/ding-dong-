import React from 'react'
import AttendingList from '../attendingList/AttendingList'
import Nav from '../nav/Nav'
import './statusboard.css'
import YouTube from 'react-youtube';
import dingDongLogo from '../../imgs/ding-dong-nologo.svg'
import { Link } from 'react-router-dom';

const StatusBoard = () => {

    const replay = (event) => {
        event.target.playVideo();
      };

    const opts = {
        height: '',
        width: '',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          mute: true,
        },
      };
  return (
    <>
    <div className='status-board__container'>
        <section className='nav-main-section'>
        <Nav/>
        <main className='status-board__main'>
            <div className="video-wrapper">
            <YouTube videoId="cl-k8AJAja0" opts={opts} onEnd={replay} />
            </div>
        </main>
        </section>
        <aside className='attending-list__container'>
        <AttendingList/>
        </aside>
    </div>
    <footer className='status-board__footer'>
        <div className="login__button">
            <Link to='/'>
            <button className='login-btn'>Login</button>
            </Link>
        </div>
        <div className="developed-by__container">
            <h1>Powered by:</h1>
            <img src={dingDongLogo} alt="" width='100px'/>
        </div>
        </footer>
    </>
    
  )
}

export default StatusBoard