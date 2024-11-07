import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Componet/LoginPage/Login.css'
import Login from './Componet/LoginPage/Login'
// import Admin from './Componet/adminPage/admin';
import './Componet/adminPage/admin.css'

function App() {
  return (
    <>

    
      <Router>
        <Routes>
          <Route path={'/'} exact element={<Login />} />
          {/* <Route path={'/Admin'} exact element={<Admin />} /> */}
          {/* <Route path={'/employee'} exact element={<employee />} /> */}
        </Routes>
        </Router>
      {/* <Login /> */}
      {/* <Admin /> */}

    </>
  )
}

export default App
