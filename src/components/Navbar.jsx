import React from 'react'
import logo from '../images/logo.webp'
import { FaRegUser } from "react-icons/fa6";
import { FiKey } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div className="brand">
            <img src={logo} alt="MediCare Logo" />
            <a class="navbar-brand" href="#">MediCare
              <p>Healthcare Solutions</p>
            </a>
          </div>

          <div className="links" style={{ justifyContent: 'center' }}>
            <div className='nav-link'>


              <NavLink to='/' className='navl' style={{gap:'10px'}}>Home</NavLink>


              <NavLink to='/Doctors' className='navl'>Doctors</NavLink>


              <NavLink to='/Service' className='navl'>Service</NavLink>

              <NavLink to='/Appoiment' className='navl  '>Appoiment</NavLink>

              <NavLink to='/Contact' className='navl'>Contact</NavLink>
            </div>
          </div>

          <div className="btn">
            <button className='btn1'> <FaRegUser /> Doctor Admin </button>
            <button className='btn2'> <FiKey /> Login</button>
          </div>
        </div>
      </nav>


    </div>
  )
}

export default Navbar