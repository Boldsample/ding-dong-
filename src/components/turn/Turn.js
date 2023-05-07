import React, {useEffect, useState} from 'react'
import './turn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Turn = ({client}) => {
const [timer, setTimer] = useState(client.countdown)


useEffect(()=>{
  if (timer <= 0){ return }
  const intervalId = setInterval(() => {
    setTimer(timer - 1);
  }, 1000);
  return () => clearInterval(intervalId);
}, [timer])

  return (
    <>
    <tr>
        <td><FontAwesomeIcon className='icon-styles' icon={faUser}/>{client.name}</td>
        <td>{client.id}</td>
        <td>{timer}</td>
        <td>
        <p className='module-style'>{client.module.name}</p>
        </td>
        <td><button className='table__btn'><FontAwesomeIcon icon={faClock}/></button><button className='table__btn'><FontAwesomeIcon icon={faClose}/></button></td>             
</tr>
    </>
  )
}

export default Turn