import { Routes, Route, useNavigate } from 'react-router-dom'
import Welcome from './pages/Welcome.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Account from './pages/Account.jsx'
import MobileFrame from './components/MobileFrame.jsx'

export default function App() {
  return (
    <div className="app">
      <MobileFrame>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </MobileFrame>
    </div>
  )
}
