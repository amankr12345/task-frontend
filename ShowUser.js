import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import axios from 'axios'

const ShowUser = () => {
    const [user, setUser] = useState([])

    const loadUser = async () => {
        await axios.get('http://localhost:5000/app/get')
            .then(res => setUser(res.data))
            console.log(user)

    }
    useEffect(() => {
        loadUser()
    }, [])
    return (
        <>
            <Navbar />

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Index</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map(
                            (list, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>

                                    <td>{list.name}</td>
                                    <td>{list.phone}</td>
                                    <td>{list.city}</td>

                                </tr>
                            ))
                    }

                </tbody>
            </table>
        </>
    )
}
export default ShowUser