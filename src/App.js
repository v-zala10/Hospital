import React from 'react'
import Homepage from './pages/Homepage'
import DoctorsPage from './pages/Doctorspage'
import ServicesPage from './pages/Servicespage'
import Appointmentpage from "./pages/Appointmentpage";
import ContactPage from './pages/Contactpage'
import Footer from './components/Footer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Doctors" element={<DoctorsPage />} />
        <Route path="/Service" element={<ServicesPage />} />
        <Route path="/Appoiment" element={<Appointmentpage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
