import axios from 'axios'
import React, {  useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Home=()=>{
  const navigate=useNavigate()
  const [user,setUser]=useState({})
  const [users,setUsers]=useState({})

const handleSet=(e)=>{
  const {name,value}=e.target
  setUsers({...users,[name]:value})
}


const handleChange=(e)=>{
   const {name,value}=e.target
   setUser({...user,[name]:value})
   
}

const handleSubmit= (e)=>{
  e.preventDefault()
  const {name,email,password}=user
   axios.post('http://localhost:5000/app/signup',{name:name,email:email,password:password})
  .then(res=>
    setUser(res.data)
  )
  

  if(name && email && password){
  alert("signup completed....login to continue ")
  }
  else{
    alert('all fields are required')
  }
}


const handleLogin=async(e)=>{
    e.preventDefault()
    await axios.post('http://localhost:5000/app/login')
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err))
      navigate('/add')
    
     
}
  return(
    <>
    
    <h3>Sign Up</h3>
    <div className="mb-3">
    <label>Name</label>
    <input type="text" className="form-control" name="name" onChange={handleChange}/>
    
  </div>
  <div className="mb-3">
    <label>Email address</label>
    <input type="text" className="form-control" name="email" onChange={handleChange}/>
    
  </div>
  <div class="mb-1">
    <label>Password</label>
    <input type="password" className="form-control" name="password" onChange={handleChange}/>
  </div>
  
  <button onClick={handleSubmit} className="btn btn-success">Submit</button>
<h3>Login</h3>
    
  <div className="mb-3">
    <label>Email address</label>
    <input type="text" className="form-control" name="email" onChange={handleSet}/>
    
  </div>
  <div class="mb-1">
    <label>Password</label>
    <input type="password" className="form-control"   name='password' onChange={handleSet}/>
  </div>
  
  <button onClick={handleLogin} className="btn btn-success">Login</button>

    </>
    
  )
}

export default Home