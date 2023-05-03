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
    <BrowserRouter>
      <Routes>
        {/* <ManageTurns/> */}
        {/* <AddTurn/> */}
        {/* <Dashboard/> */}
        {/* <StatusBoard/> */}
        <Route exact path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
