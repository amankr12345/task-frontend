import Navbar from "../Navbar"
import { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const AddUser=()=>{
   
    const [user,setUser]=useState({})
    const navigate=useNavigate()
    const handleChange=(e)=>{
        const {name,value}=e.target
        setUser({...user,[name]:value})
    }

    const handleSubmit=()=>{
        const {name,email,phone,city}=user
        axios.post('http://localhost:5000/app/add',{name:name,phone:phone,email:email,city:city})
        .then(res=>setUser(res.data))
        alert('USER CREATED SUCCESSFULLY')
        navigate('/show')
    }

    return(
        <>
        <Navbar/>
        <h2>ADD USER</h2>
        <label>ENTER YOUR NAME</label>
        <input type='text' placeholder="name" name="name" onChange={handleChange}/><br/>
        <label>ENTER YOUR PHONE NUMBER</label>
        <input type='number' placeholder='phone number' name='phone'onChange={handleChange}/><br/>
        <label>ENTER YOUR Email Address</label>
        <input type='text' placeholder='phone number' name='email' onChange={handleChange}/><br/>
        <label>ENTER YOUR CITY</label>
        <input type='text' placeholder='city' name='city' onChange={handleChange}/><br/><br/>
        <button onClick={handleSubmit}>ADD</button>
        </>
    )
}

export default AddUser