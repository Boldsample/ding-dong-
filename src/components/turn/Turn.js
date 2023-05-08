import React, {useEffect, useState, useContext} from 'react'
import './turn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { UsersContext } from '../../storage/usersContext'


const Turn = ({client}) => {
const [timer, setTimer] = useState(client.countdown)
const context = useContext(UsersContext)
const { setClient, handleSave, clientList, removeModuleFromPerson, modules} = context.value;

useEffect(()=>{
  if( timer == 0) {
    removeModuleFromPerson(client.id, clientList, modules)
    console.log(modules)
  }
  if (timer <= 0){ return }
  const intervalId = setInterval(() => {
    setTimer(timer - 1);
  }, 1000);
  return () => clearInterval(intervalId);
  console.log(client)
}, [timer, clientList])

  return (
    <>
    <tr>
        <td><FontAwesomeIcon className='icon-styles' icon={faUser}/>{client.name}</td>
        <td>{client.id}</td>
        <td>{timer}</td>
        <td>
        <p className='module-style'>{client.status == 'open' ? client.module.name : 'closed'}</p>
        </td>
        <td><button className='table__btn'><FontAwesomeIcon icon={faClock}/></button><button className='table__btn'><FontAwesomeIcon icon={faClose}/></button></td>             
</tr>
    </>
  )
}

export default Turn