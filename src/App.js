import React from 'react'
import Homepage from './pages/Homepage'
import DoctorsPage from './pages/Doctorspage'
import ServicesPage from './pages/Servicespage'
import Appointmentpage from "./pages/Appointmentpage";
import ContactPage from './pages/Contactpage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/Appoiment" element={<Appointmentpage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
