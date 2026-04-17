import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import dr1 from '../images/dr1.jpg'
import dr2 from '../images/dr2.jpg'
import { FaAnglesRight } from "react-icons/fa6";
import { CiMedal } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar.jsx' 

function Doctorspage() {

  const [searchInput, setSearchInput] = React.useState('')
  const doctors_team = [
      {
                id: 1,
                img: "https://i.pinimg.com/736x/3e/d5/fe/3ed5fecd0f3a5ae7dd18c7273e34b2e6.jpg",
                name: "Dr. Aris Thorne",
                dept: "Cardiology",
                experience: "12 years",
                successRate: "96%",
                patients: "4,500+",
                qualifications: "MBBS, MD (Cardiology), FACC",
                location: "New York, USA",
                consultationFee: "$120",
                availability: "Mon - Sat, 10:00 AM - 4:00 PM",
                about: "Experienced cardiologist specializing in heart failure management, preventive cardiology, and advanced cardiac imaging."
            },
            {
                id: 2,
                img: "https://i.pinimg.com/736x/4e/0c/68/4e0c685f30cfed10af0db0fcf605fa5b.jpg",
                name: "Dr. Elena Rodriguez",
                dept: "Pediatrics",
                experience: "8 years",
                successRate: "94%",
                patients: "3,200+",
                qualifications: "MBBS, MD (Pediatrics)",
                location: "Madrid, Spain",
                consultationFee: "$80",
                availability: "Mon - Fri, 9:00 AM - 2:00 PM",
                about: "Dedicated pediatrician focused on child growth, vaccinations, and early diagnosis of developmental disorders."
            },
            {
                id: 3,
                img: "https://i.pinimg.com/736x/24/53/d4/2453d4dc883455475cdf7325d72c497d.jpg",
                name: "Dr. Marcus Chen",
                dept: "Neurology",
                experience: "15 years",
                successRate: "97%",
                patients: "5,800+",
                qualifications: "MBBS, DM (Neurology), PhD",
                location: "Beijing, China",
                consultationFee: "$150",
                availability: "Tue - Sat, 11:00 AM - 5:00 PM",
                about: "Senior neurologist specializing in stroke management, epilepsy, and neurodegenerative disorders."
            },
            {
                id: 4,
                img: "https://i.pinimg.com/736x/0f/79/a7/0f79a79b23cda5ff578f45521291a2a9.jpg",
                name: "Dr. Sarah Jenkins",
                dept: "Dermatology",
                experience: "5 years",
                successRate: "92%",
                patients: "2,100+",
                qualifications: "MBBS, MD (Dermatology)",
                location: "London, UK",
                consultationFee: "$70",
                availability: "Mon - Fri, 12:00 PM - 6:00 PM",
                about: "Dermatologist focused on acne treatment, skin rejuvenation, and cosmetic dermatology procedures."
            },
            {
                id: 5,
                img: "https://i.pinimg.com/736x/a8/31/73/a83173193d0cd45e6e4c940a96abfdda.jpg",
                name: "Dr. Amara Okafor",
                dept: "Oncology",
                experience: "10 years",
                successRate: "95%",
                patients: "3,900+",
                qualifications: "MBBS, MD (Oncology)",
                location: "Lagos, Nigeria",
                consultationFee: "$110",
                availability: "Mon - Sat, 9:00 AM - 3:00 PM",
                about: "Oncologist specializing in early cancer detection, chemotherapy planning, and patient-centered care."
            }
  ]
  const [searchedr, setsearchdr] = React.useState(doctors_team)


  const handleSearch = (e) => {
    let inpvalue = searchInput.toLowerCase()
    const search = doctors_team.filter((drdata) => drdata.name.toLowerCase().includes(inpvalue) || drdata.dept.toLowerCase().includes(inpvalue))
    setsearchdr(search)
  }

  useEffect(() => {
    handleSearch()
  }, [searchInput])

  return (
    <>
    <Navbar />
      <div className='drpage'>
        <h1>Our Medical Experts</h1>
        <p>Find your ideal doctor by name or specialization</p>
        <div className="searchBox">
          <FaSearch className='icon' />
          <input type="text" placeholder="Search Doctors by name and specialization " onChange={(e) => {
            handleSearch(e)
            setSearchInput(e.target.value)
          }}

            value={searchInput}
          />
          {searchInput ?
            <RxCross2 className='icon' onClick={() => {
              setSearchInput('')
              handleSearch()
            }} />
            :
            <></>}

        </div>

        <div className="cards">

          {
            searchedr.length == 0 ? <p style={{ height: "250px" }}>No doctors found matching your search criteria.</p> :

              searchedr.map((e) => {
                return (
                  <div className='drcard'>
                    <img src={e.img} alt="" />
                    <h2>{e.name}</h2>
                    <h4>{e.dept}</h4>
                    <div><CiMedal className='me-2' />{e.experience}</div>
                    <button><FaAnglesRight className='mx-1 mb-1' />Book Now </button>
                  </div>
                )
              })

          }


        </div>

        <div className="blob1"></div>
        <div className="blob2"></div>
      </div>
      <Footer />
    </>
  )
}

export default Doctorspage