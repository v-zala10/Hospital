import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function MedicalTeam() {

    const medicalTeam = [


        {
            id: 1,
            img: "https://static.vecteezy.com/system/resources/previews/016/223/362/non_2x/human-heart-logo-medical-cardiology-icon-illustration-vector.jpg",
            name: "Dr. Aris Thorne",
            dept: "Cardiology",
            experience: "12 years"
        },
        {
            id: 2,
            img: "https://img.freepik.com/premium-vector/pediatrician-logo-template-design-vector_20029-1040.jpg?semt=ais_hybrid&w=740&q=80",
            name: "Dr. Elena Rodriguez",
            dept: "Pediatrics",
            experience: "8 years"
        },
        {
            id: 3,
            img: "https://static.vecteezy.com/system/resources/thumbnails/011/718/509/small/brain-logo-template-design-brainstorm-logo-ideas-neurology-logo-think-idea-concept-free-vector.jpg",
            name: "Dr. Marcus Chen",
            dept: "Neurology",
            experience: "15 years"
        },
        {
            id: 4,
            img: "https://img.freepik.com/premium-vector/hair-clinic-dermatology-icon-follicle-grow-emblem_8071-62148.jpg?semt=ais_hybrid&w=740&q=80",
            name: "Dr. Sarah Jenkins",
            dept: "Dermatology",
            experience: "5 years"
        },
        {
            id: 5,
            img: "https://img.freepik.com/premium-vector/ribbon-logo-template_1948-7983.jpg",
            name: "Dr. Amara Okafor",
            dept: "Oncology",
            experience: "10 years"
        }
    ]



    return (
        <div className='full'>
            <div className="medical"> <h1>Our Medical Team</h1>
                <h4>Book appointments quickly with our verified specialists.</h4>
            </div>

            <div className="cards">
                {medicalTeam.map((Doctor) => (
                    <div className="card" key={Doctor.id}>
                        <img src={Doctor.img} alt={Doctor.name} />
                        <h2>{Doctor.name}</h2>
                        <p>Dept:{Doctor.dept}</p>
                        <p>Experience: {Doctor.experience}</p>
                        <button> <MdKeyboardDoubleArrowRight /> Book Appointment</button>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default MedicalTeam