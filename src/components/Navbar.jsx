import React from 'react'
import logo from '../images/logo.webp'
import { FaRegUser } from "react-icons/fa6";
import { FiKey } from "react-icons/fi";

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
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Doctors</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Appointment</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
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