import React from 'react'
import { FaRegDotCircle } from "react-icons/fa";
import c1 from '../images/C1.webp'
import c2 from '../images/C2-.webp'
import c3 from '../images/C3.webp'
import c4 from '../images/C4.svg'
import c5 from '../images/C5.webp'
import c6 from '../images/C6.webp'


function Certificate() {
  return (
    <div>
      <div className="text">
        <h1>CERTIFIED & EXCELLENCE</h1>
        <h4>Government recognized and internationally accredited healthcare standards</h4>
        <p> <FaRegDotCircle /> OFFICIALLY CERTIFIED</p>
      </div>


      <div className="marquee">
        <div>

          <span>
            <img src={c1} alt="Certificate" />
            <p>Medical Commission</p>
          </span>

          <span>
            <img src={c2} alt="Certificate" />
            <p>Government Approved</p>
          </span>

          <span>
            <img src={c3} alt="Certificate" />
            <p>NABH Accredited</p>
          </span>

          <span>
            <img src={c4} alt="Certificate" />
            <p>Medical Council</p>
          </span>

          <span>
            <img src={c5} alt="Certificate" />
            <p>Quality Healthcare</p>
          </span>

          <span>
            <img src={c6} alt="Certificate" />
            <p>Paramedical Council</p>
          </span>

          {/* duplicate for smooth infinite scroll */}

          <span>
            <img src={c1} alt="Certificate" />
            <p>Medical Commission</p>
          </span>

          <span>
            <img src={c2} alt="Certificate"  width='25px'/>
            <p>Government Approved</p>
          </span>

          <span>
            <img src={c3} alt="Certificate" />
            <p>NABH Accredited</p>
          </span>

          <span>
            <img src={c4} alt="Certificate" />
            <p>Medical Council</p>
          </span>

          <span>
            <img src={c5} alt="Certificate" />
            <p>Quality Healthcare</p>
          </span>

          <span>
            <img src={c6} alt="Certificate" />
            <p>Paramedical Council</p>
          </span>

        </div>
      </div>
    </div>

  )
}

export default Certificate