import { createContext, useState } from "react";

export const UsersContext = createContext();

export const UserContextProvider = (props) =>{
    const [client, setClient] = useState({
        name: '',
        id: ''
      })
    const [clientList, setClientList] = useState([]);
    
      function handleChange(evt) {
        const value = evt.target.value;
        setClient({
          ...client,
          [evt.target.name]: value
        });
      }
      
      console.log(client)

      const value = {
        client,
        setClient,
        clientList,
        setClientList
      }

      return (
        <UsersContext.Provider value={{value}}>
           {props.children}
        </UsersContext.Provider>
      )

}