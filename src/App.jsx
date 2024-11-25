import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/home'
import Navbar from './components/Navbar'
import About from './components/about'
import Service from './components/service'
import Contact from './components/contact'
import Login from './components/Login'
import Register from './components/register'
import Dashboard from './components/Dashbord/Dashbord'
import AdminLogin from './components/adminlogin'
import Message from './components/Dashbord/Message'

import Profile from './components/Dashbord/Profiles'
import Albumb from './components/Albumb';
import Appointments from './components/Dashbord/Appointments';



function App() {
  return (

      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='service' element={<Service/>}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register />}/>
          <Route path='albumb' element={<Albumb />}/>
        </Route>
        <Route path='adminlogin' element={<AdminLogin />}/>
        <Route 
          path="/admin" 
          element={

              <Dashboard />

          } 
        />
        <Route path='/message' element={<Message />}/>

        <Route path='/appointments' element={<Appointments />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>

  )
}

export default App
