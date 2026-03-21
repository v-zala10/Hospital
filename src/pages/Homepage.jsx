import React from 'react'
import Navbar from '../components/Navbar.jsx'     
import Home from '../components/Home.jsx'  
import { GrEmergency } from 'react-icons/gr'
import Certificate from '../components/Certificate.jsx'
import MedicalTeam from '../components/MedicalTeam.jsx'
import Review from '../components/Review.jsx'
import Footer from '../components/Footer.jsx'

function Homepage() {
  return (
    <div>
      <Navbar />
      <Home />
      <hr style={{ width: "100%", border: "3px solid #7DEDB5", marginTop: "50px" }} />
      <Certificate/>
      <MedicalTeam />
      <Review />
      <Footer />

    </div>
  )
}

export default Homepage