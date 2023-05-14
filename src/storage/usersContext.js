import { createContext, useState } from "react";

export const UsersContext = createContext();

export const UserContextProvider = (props) =>{
  const [clientList, setClientList] = useState([]);
  const [modules, setModules] = useState([
    {
      id: 1,
      name: 'module 1',
      busy: false,
      clientId: undefined
    },
    {
      id: 2,
      name: 'module 2',
      busy: false,
      clientId: undefined

    },{
      id: 3,
      name: 'module 3',
      busy: false,
      clientId: undefined

    },{
      id: 4,
      name: 'module 4',
      busy: false,
      clientId: undefined

    },{
      id: 5,
      name: 'module 5',
      busy: false,
      clientId: undefined
    }
  
  ])

    function assignPersonToModule(client = false) {
      let assignedClients = [...clientList]
      let assignedModules = [...modules]

      if(client){
        assignedClients.push(client)
      }
      assignedModules.map(module => {
        if(!module.busy){
         let freeClient = null;
         assignedClients.map(client => {
            if(client.status === 'onQueue' && freeClient === null){
              client.status = 'onService';
              freeClient = client.id;
              client.date = new Date().getTime()
              module.clientId = freeClient;
              module.busy = true 
              console.log("asignacion de cliente", module, client)
            }
            
            return client
         })

        }
        return module
      })
      setModules(assignedModules)
      setClientList(assignedClients)
    }

    const findModule = (client, modules) =>{
        const correctModule = modules.find(module =>{
          return module.clientId == client.id
        })
        return correctModule
    }

    const value = {
        findModule,
        setModules,
        modules,
        assignPersonToModule,
        clientList,
        setClientList,
      }

      console.log(clientList)
    console.log(modules)
      return (
        <UsersContext.Provider value={{value}}>
           {props.children}
        </UsersContext.Provider>
      )

}