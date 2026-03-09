import React from 'react'
import banner from '../images/Banner.png'
import { FaStethoscope } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaRibbon } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";


function Home() {
    return (
        <div>
            <div className="home">

                <div className="heading">
                    <div className="mainheading">
                        <div className="dr"><FaStethoscope /></div>
                        <h1>Medi<span>Care+</span></h1>

                    </div>
                    <p style={{ paddingLeft: '50px', color: 'gold' }}> <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar /></p>
                    <div className="heading1">
                        <p>Premium Healthcare</p>
                        <h6>At Your Fingertips</h6>
                    </div>
                    <div className="buttons">
                        <div className="button1">
                            <button className='greenbtn'> <FaRibbon /> Certified Specialists</button>
                            <button className='greenbtn'> <FaRegClock /> 24/7 Availability</button>
                            <button className='greenbtn'> <MdOutlineSecurity /> Safe & Secure</button>
                        </div>
                        <div className="button2">
                            <button className='greenbtn'> <LuUsers /> 500+ Doctors</button>
                            <button className='greenbtn'> <FaCalendarAlt /> Book Appointment Now</button>
                            <button style={{ backgroundColor: '#c8050879' }} className='red' > <IoMdCall /> Emergency Call</button>

                        </div>
                    </div>
                </div>


                <div className="banner">
                    <img src={banner} alt="MediCare Banner" />
                </div>
            </div>


        </div>)
}

export default Home