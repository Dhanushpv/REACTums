import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Componet/LoginPage/Login.css'
import Login from './Componet/LoginPage/Login'
import Admin from './Componet/adminPage/admin';
import './Componet/adminPage/admin.css'
import Employee from './Componet/employee/employee';
import './Componet/employee/employee.css'
import AddEmployee from './Componet/Addemployee/AddEmployee';
import './Componet/Addemployee/AddEmployee.css'
import SingleEmpView from './Componet/SingleEmpView/SingleEmpView';
import './Componet/SingleEmpView/SingleEmpView.css'

function App() {
  return (
    <>

    
      <Router>
        <Routes>
          <Route path={'/'} exact element={<Login />} />
          <Route path={'/Login'} exact element={<Login />} />
          <Route path={'/Admin'} exact element={<Admin />} />
          <Route path={'/Employee'} exact element={<Employee />} />
          <Route path={'/AddEmployee'} exact element={<AddEmployee />} />
          <Route path={'/SingleEmpView'} exact element={<SingleEmpView />} />
        </Routes>
        </Router>
      {/* <Login /> */}
      {/* <Admin /> */}

    </>
  )
}

export default App
