import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AdminSignup from './components/AdminSignup'
import Login from './components/Login'
import AccountOfficer from './components/AccountOfficer'

function App() {

  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/register" element={<AdminSignup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/accountOfficer" element={<AccountOfficer />}></Route>
        </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
