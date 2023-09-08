import React from 'react'

function Section() {
  return (
    <section class="wrapper">
    <div class="container">
      <div class="grid-cols-2">
        <div class="grid-item-1">
          <h1 class="main-heading">
            Better Solutions For 
            <br />
            Your Business
          </h1>
          <p class="info-text">
          We are team of talented designers making websites with Bootstrap
          </p>

          <div class="btn_wrapper">
            <button class="btn view_more_btn">
              Get Started 
            </button>

            <button class="btn documentation_btn"><i class="ri-play-circle-line"></i>Watch Video</button>
          </div>
        </div>
        <div class="grid-item-2">
          <div class="team_img_wrapper">
            <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png" class="animated" alt="team-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Section