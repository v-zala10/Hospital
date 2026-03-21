import React from 'react'

import logo from '../images/logo.webp'
function Footer() {
    return (
        <div>
            <div className="first">
                <img src={logo} alt="Logo" />
                <div className="info">
                    <h3>MediCare</h3>
                    <p>Healthcare Solutions</p>
                </div>
                <p>Your trusted partner in healthcare innovation. We're committed to providing exceptional medical care with cutting-edge technology and compassionate service.</p>
            </div>
            <div className="second"></div>
            <div className="third"></div>
            <div className="fourth"></div>
        </div>
    )
}

export default Footer