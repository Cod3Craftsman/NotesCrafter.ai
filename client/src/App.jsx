import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { useEffect } from 'react'
import { getCurrentUser } from './services/api.js'
import { useDispatch, useSelector } from 'react-redux'
import History from './pages/History.jsx'
import Notes from './pages/Notes.jsx'
import Pricing from './pages/Pricing.jsx'
import PaymentSuccess from './pages/PaymentSuccess.jsx'
import PaymentFailed from './pages/PaymentFailed.jsx'
export const serverUrl = "https://notescrafter-aiserver.onrender.com"
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    getCurrentUser(dispatch)
  }, [dispatch])


  const { userData } = useSelector((state) => state.user)
  return (
    <Routes>
      <Route path='/' element={userData ? <Home /> : <Navigate to="/auth" replace/>} />
      <Route path='/auth' element={userData ? <Navigate to="/" replace /> : <Auth />} />
      <Route path='/history' element={userData ? <History /> : <Auth />} />
      <Route path='/notes' element={userData ? <Notes /> : <Auth />} />
      <Route path='/pricing' element={userData ? <Pricing /> : <Auth />} />
      <Route path='/payment-success' element={<PaymentSuccess />}/>
      <Route path='/payment-failed' element={<PaymentFailed />}/>
    </Routes>
  )
}

export default App
