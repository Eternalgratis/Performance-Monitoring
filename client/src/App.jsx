import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Admin from './components/Admin'
import Login from './components/Login'
import AccountOfficer from './components/AccountOfficer'
import Homepage from './components/HomePage'

function App() {

  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/accountOfficer" element={<AccountOfficer />}></Route>
        </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
