import React, {useEffect, useState, useContext} from 'react'
import './turn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { UsersContext } from '../../storage/usersContext'
import { useCountdown } from '../../hooks/useCountdown';

const Turn = ({client}) => {
  const context = useContext(UsersContext)
  const { setClient, handleSave, clientList, removeModuleFromPerson, modules, findModule, setModules, assignPersonToModule, setClientList} = context.value;
  const [countDown, setCountDown] = useState(Math.floor((new Date() - client.date) * 0.001))
  const clientModule = findModule(client, modules)
 console.log(countDown)
 useEffect(()=>{
  if(countDown < 60 && client.status == 'onService' ){
    const interval = setTimeout(() => {
      setCountDown(Math.floor((new Date() - client.date) * 0.001));
    }, 1000);    
  }
  if(60 - countDown === 0 ){
    let updatedClientList = [...clientList]
    let updateModules = [...modules];

    updateModules.map(module => {
      if(module.clientId == client.id){
            module.busy = false;
            module.clientId = undefined
            return module 
          }
          updatedClientList.map(person =>{
            if(person.id == client.id){
              person.status = 'Closed'
              return person
            }
          })
    })
    assignPersonToModule()  
  }
}, [countDown, clientList])

console.log(clientList, modules)
 
  return (
    <>
    <tr>
        <td><FontAwesomeIcon className='icon-styles' icon={faUser}/>{client.name}</td>
        <td>{client.id}</td>
        <td>{client.status == "onQueue" ? 'Please Wait' :60 - countDown <= 0 ? 'Expired' : 60 - countDown }</td>
        <td>
        {/* <p className='module-style'>{60 - countDown <= 0  ? 'Closed' : client.status == 'onService' ? clientModule.name : client.status === "onQueue" ? client.status : '' }</p> */}
        <p className='module-style'>{client.status === "onQueue" || client.date === null ? client.status : 60 - countDown <= 0  ? 'Closed' : client.status == 'onService' ? clientModule.name :  '' }</p>
        </td>
        <td><button className='table__btn'><FontAwesomeIcon icon={faClock}/></button><button className='table__btn'><FontAwesomeIcon icon={faClose}/></button></td>             
</tr>
    </>
  )
}

export default Turn