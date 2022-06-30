import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link to='/add' class="nav-link active" aria-current="page">Create User</Link>
              </li>
              <li className="nav-item">
              <Link to='/show' class="nav-link active" aria-current="page">Show Users</Link>
              </li>
              <li className="nav-item">
              <Link to='/' class="nav-link active" aria-current="page">Logout</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar