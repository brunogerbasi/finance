
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
//import ProtectedRoute from './components/common/ProtectedRoute/ProtectedRoute'

function App() {   

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* <Route
          path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
        /> */}
      </Routes>
    </Router>
  )
}

export default App
