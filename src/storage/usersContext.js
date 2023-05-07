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
      const availableModules = modules.filter(module => !module.busy);
      if (availableModules.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableModules.length);
        const selectedModule = availableModules[randomIndex];
        selectedModule.busy = true;
        person.module = selectedModule;
        return true; // successful assignment
      } else {
        return false; // no available modules
      }
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