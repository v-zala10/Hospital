import React from 'react'
import Navbar from '../components/Navbar.jsx'     
import Home from '../components/Home.jsx'  
import { GrEmergency } from 'react-icons/gr'
import Certificate from '../components/Certificate.jsx'


function Homepage() {
  return (
    <div>
      <Navbar />
      <Home />
      <hr />
      <Certificate/>
    </div>
  )
}

export default Homepage