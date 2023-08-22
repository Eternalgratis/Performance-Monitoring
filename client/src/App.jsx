import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Admin from './components/Admin'
import Login from './components/Login'
import AccountOfficer from './components/AccountOfficer'
import Registration from './components/Registration'
import AdminLogin from './components/AdminLogin'


function App() {

  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registration />}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin-login" element={<AdminLogin />}></Route>
          <Route path="/accountOfficer" element={<AccountOfficer />}></Route>
        </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
