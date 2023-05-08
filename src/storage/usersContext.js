import { createContext, useState } from "react";

export const UsersContext = createContext();

export const UserContextProvider = (props) =>{
  const [clientList, setClientList] = useState([]);
  const [modules, setModules] = useState([
    {
      id: 1,
      name: 'module 1',
      busy: false,
    },
    {
      id: 2,
      name: 'module 2',
      busy: false,
    },{
      id: 3,
      name: 'module 3',
      busy: false,
    },{
      id: 4,
      name: 'module 4',
      busy: true,
    },{
      id: 5,
      name: 'module 5',
      busy: false,
    },
  
  ])

    const [client, setClient] = useState({
        name: '',
        id: '',
        module: null,
        startCountdown() {
          const intervalId = setInterval(() => {
            if (this.countdown <= 0) {
              clearInterval(intervalId);
              console.log("Countdown finished!");
              return;
            }
            this.countdown -= 1;
            // console.log(`Countdown: ${this.countdown}`);
          }, 1000);
        }

      })

    function assignModuleToPerson(person, modules) {
      console.log(modules)
      const availableModules = modules.filter(module => !module.busy);
      if (availableModules.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableModules.length);
        const selectedModule = { ...availableModules[randomIndex], busy: true };
        const assignedPerson = { ...person, module: selectedModule, status: 'open'};
        return assignedPerson;
      } else {
        return null; // no available modules
      }
    }

    const removeModuleFromPerson = (id, clients, modules) => {
      const client = clients.find(client => client.id == id)
      console.log(modules)
        const module = modules.find(module => module.id == client.module.id);
        module.busy = false;
        setModules(...modules)
        console.log(modules, 'after')
        client.status = 'closed'
        console.log(clientList)
      
    }

      function handleChange(evt) {
        const value = evt.target.value;
        setClient({
          ...client,
          [evt.target.name]: value
        });
      }

      const handleSave = () =>{
        setClientList([
          ...clientList,
          client
        ])
      }
      
      console.log(clientList)

      const value = {
        removeModuleFromPerson,
        setModules,
        modules,
        assignModuleToPerson,
        client,
        setClient,
        clientList,
        setClientList,
        handleSave
      }

      return (
        <UsersContext.Provider value={{value}}>
           {props.children}
        </UsersContext.Provider>
      )

}