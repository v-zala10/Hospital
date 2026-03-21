import React from 'react'
import { FaRegStar } from "react-icons/fa";
import pic1 from '../images/photo1.avif'


function Review() {
  return (
    <div>
      <div className="review">
        <h1>Voices of Trust</h1>
        <p>Real stories from doctors and patients sharing their positive experiences with our healthcare platform.</p>
      </div>
      <main>
        <div class="slider" style={{ '--width': '550px', '--height': '180px', '--quantity': 3 }}>
          <div class="list">
            <div class="item" style={{ '--position': 1 }}>
              <div className="dr-review">
                <div className="img"><img src={pic1} alt="Dr. Robert Martinez" />
                </div>
                <div className="dr">
                  <h4>Dr. Robert Martinez</h4>
                  <p>Pediatrician</p> <p><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></p>
                  <p>"This platform has streamlined our clinic operations significantly. Patient management is much more organized."</p>              </div>
              </div>
            </div>
            <div class="item" style={{ '--position': 2 }}>
              <div>
                <h4>Dr. Sarah Johnson</h4>
                <p>Cardiologist</p>
                <p>"The integration with our existing systems was seamless. It has greatly improved our workflow and patient satisfaction."</p>
              </div>
            </div>
            <div class="item" style={{ '--position': 3 }}>
              <div>
                <h4>Dr. Michael Chen</h4>
                <p>Neurologist</p>
                <p>"The user interface is intuitive and easy to navigate. Our staff adapted quickly to the new system."</p>
              </div>
            </div>
          </div>

        </div>

        <div class="slider" reverse="true" style={{ '--width': '350px', '--height': '150px', '--quantity': 4 }}>
          <div class="list">
            <div class="item" style={{ '--position': 1 }}>
              <div>
                <h4>heading</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis necessitatibus ex, nesciunt veritatis repudiandae provident delectus quidem, et rerum sit itaque. Incidunt officiis architecto voluptatum sunt consequuntur, maxime nam perspiciatis.</p>
              </div>
            </div>
            <div class="item" style={{ '--position': 2 }}>
              <div>
                <h4>heading</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis necessitatibus ex, nesciunt veritatis repudiandae provident delectus quidem, et rerum sit itaque. Incidunt officiis architecto voluptatum sunt consequuntur, maxime nam perspiciatis.</p>
              </div>
            </div>
            <div class="item" style={{ '--position': 3 }}>
              <div>
                <h4>heading</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis necessitatibus ex, nesciunt veritatis repudiandae provident delectus quidem, et rerum sit itaque. Incidunt officiis architecto voluptatum sunt consequuntur, maxime nam perspiciatis.</p>
              </div>
            </div>
            <div class="item" style={{ '--position': 4 }}>
              <div>
                <h4>heading</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis necessitatibus ex, nesciunt veritatis repudiandae provident delectus quidem, et rerum sit itaque. Incidunt officiis architecto voluptatum sunt consequuntur, maxime nam perspiciatis.</p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}

export default Review