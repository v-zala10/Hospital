import React from 'react'

function Review() {
  return (
    <div>
      <div className="review">
        <h1>Voices of Trust</h1>
        <p>Real stories from doctors and patients sharing their positive experiences with our healthcare platform.</p>
      </div>
      <main>
        <div class="slider" style={{ '--width': '350px', '--height': '150px', '--quantity': 4 }}>
          <div class="list">
            <div class="item" style={{ '--position': 1 }}>
              <img src="https://www.wsupercars.com/thumbnails/Audi/2023-Audi-R8-Coupe-V10-GT-RWD-001.jpg" alt="Audi R8" />
            </div>
            <div class="item" style={{ '--position': 2 }}>
              <img src="https://www.wsupercars.com/thumbnails/Lamborghini/2022-Lamborghini-Aventador-LP780-4-Ultimae-Roadster-001.jpg" alt="Lamborghini Aventador" />
            </div>
            <div class="item" style={{ '--position': 3 }}>
              <img src="https://www.wsupercars.com/thumbnails/BMW/2025-BMW-M4-CS-001.jpg" alt="BMW M4" />
            </div>
            <div class="item" style={{ '--position': 4 }}>
              <img src="https://www.wsupercars.com/wp-content/uploads/2024-Rolls-Royce-Droptail-Arcadia-001.jpg" alt="Rolls Royce Droptail" />
            </div>
          </div>

        </div>

        <div class="slider" reverse="true" style={{ '--width': '350px', '--height': '150px', '--quantity': 4 }}>
          <div class="list">
            <div class="item" style={{ '--position': 1 }}>
              <img src="https://www.wsupercars.com/thumbnails/Audi/2023-Audi-R8-Coupe-V10-GT-RWD-001.jpg" alt="Audi R8" />
            </div>
            <div class="item" style={{ '--position': 2 }}>
              <img src="https://www.wsupercars.com/thumbnails/Lamborghini/2022-Lamborghini-Aventador-LP780-4-Ultimae-Roadster-001.jpg" alt="Lamborghini Aventador" />
            </div>
            <div class="item" style={{ '--position': 3 }}>
              <img src="https://www.wsupercars.com/thumbnails/BMW/2025-BMW-M4-CS-001.jpg" alt="BMW M4" />
            </div>
            <div class="item" style={{ '--position': 4 }}>
              <img src="https://www.wsupercars.com/wp-content/uploads/2024-Rolls-Royce-Droptail-Arcadia-001.jpg" alt="Rolls Royce Droptail" />
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}

export default Review