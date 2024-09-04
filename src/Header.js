import React from 'react'
import "./CSS/header.css";
import { NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div classNameName='main-header'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid ">
    <a className="navbar-brand" href="/"><img src='/Asset/shawnlogo.png' alt='Shawn Joseph'></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     
      <i class="fa fa-bars" aria-hidden="true"></i>
     
    </button>
    <div className="collapse navbar-collapse menu" id="navbarNav">
      <ul className="navbar-nav">
      <li>
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/work">Work</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/about">About Me</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/partner">My Partner</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
    <button className='btn-one'>Hire Me</button>
  </div>
</nav>
</div>
    </>
  )
    
    
  
}

export default Header