import React from 'react'
import logo from '../images/logo.webp'

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid ">

          <div className="brandname">
            <div className="">
              <img src={logo} alt="Logo" width="100" />
            </div>
            <div className="">
              <h2>Medi<span>Care</span></h2>
              <p>Healthcare Solutions</p>
            </div>
          </div>

          <div className="display">
            <div class="collapse navbar-collapse">
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
                </li> <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>

          </div>
          <div className='adminbtn'>

            <button>Doctor Admin</button>
            <button>Login</button>
          </div>
        </div>
      </nav>


    </div>
  )
}

export default Navbar