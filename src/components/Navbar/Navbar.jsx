import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
export default function Navbar() {
  return (
   <nav className={`navbar navbar-expand-lg navbar-light'  ${style['bgcolor']}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link" to="Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Movies">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Tvshows">Tvshows</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="People">People</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="About">About</Link>
        </li>
       
      </ul>
      <ul className='list-unstyled d-flex auth-link d-flex align-items-center '>
          <div className="social-links">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-instagram"></i>
           </div>
      <li className="nav-item">
          <Link className="nav-link" to="Login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Register">Logout</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>

 )
}
