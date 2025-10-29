import Home from '../pages/HomePage'
import UserDetail from '../pages/UserDetailPage'
import { Route, Routes } from 'react-router-dom'

function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetail />} />
    </Routes>    
  )
}

export default AppRouter