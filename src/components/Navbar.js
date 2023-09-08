import React  from 'react'

function Navbar() {
  return (
    <header class="container header">
    
    <nav class="nav">
      <div class="logo">
        <h2>ARSHA</h2>
      </div>

      <div class="nav_menu" id="nav_menu">
        <button class="close_btn" id="close_btn">
          <i class="ri-close-fill"></i>
        </button>

        <ul class="nav_menu_list">
          <li class="nav_menu_item">
            <a href="/" class="nav_menu_link" id="home-item">Home</a>
          </li>
          <li class="nav_menu_item">
            <a href="/" class="nav_menu_link">About</a>
          </li>
          <li class="nav_menu_item">
            <a href="/" class="nav_menu_link">Services</a>
          </li>
          <li class="nav_menu_item">
            <a href="/" class="nav_menu_link">Portfolio</a>
          </li>
          <li class="nav_menu_item">
            <a href="/" class="nav_menu_link">Team</a>
          </li>
          <li class="nav_menu_item">
            <a href="/" class="nav_menu_link">Contact</a>
          </li>
          <li class="nav_menu_item">
          <button class="btn1 view_more_btn">
              Get Started 
            </button>
          </li>
        </ul>
      </div>

      <button class="toggle_btn" id="toggle_btn">
        <i class="ri-menu-line"></i>
      </button>
    </nav>
  </header>
  )
}

export default Navbar