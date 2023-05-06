import React from 'react';
import { useContext } from 'react';
import { UserContextProvider } from './storage/usersContext';
import './style.css';
import Login from './components/login/Login';
import StatusBoard from './components/statusboard/StatusBoard';
import Dashboard from './components/dashboard/Dashboard';
import AddTurn from './components/addturn/AddTurn';
import ManageTurns from './components/manageturns/ManageTurns';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {


  return (
    <>
    <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path="/manageturns" element={<ManageTurns/>}/>
        <Route exact path="/addturn" element={<AddTurn/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/statusboard" element={<StatusBoard/>}/>
        <Route exact path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </UserContextProvider>
    </>
  );
}

export default App;
