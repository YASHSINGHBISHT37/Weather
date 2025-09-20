import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Signup from './pages/signup'
import Login from './pages/login'

const App = () => {
  return (
    <div>
      <Home />



      {/* <Link to='/'>Home</Link>
      <Link to='/Login'>Login</Link>
      <Link to='/Singup'>Signup</Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes> */}
    </div>
  )
}

export default App
