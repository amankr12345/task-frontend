import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/HomePage'
import Adduser from './Component/Adduser'
import ShowUser from './Component/ShowUser'
import Navbar from './Navbar'
//import Navbar from './Navbar'
function App() {
  return (
    <div>
      <h2><center>USER MANAGEMNT SYSTEM</center></h2>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Adduser/>}/>
      <Route path='/show' element={<ShowUser/>}/>
    </Routes>
    </div>
    

      
  )
}

export default App
