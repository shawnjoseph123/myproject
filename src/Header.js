import React from 'react'
import "./CSS/header.css";
import { NavLink} from 'react-router-dom';


const Header = () => {
  return (
    <>
    <div classNameName='main-header'>
 <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
  <NavLink className="navbar-brand" to="/"><img src='/Asset/shawnlogo.png' alt='Shawn Joseph'></img></NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}
           <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item"> 
          <NavLink className="nav-link" to="/work">Work</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About Me</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
    </div>
    <a href="https://drive.google.com/file/d/1ftJzdMbgq595b3mWzwZxTmGtp3CYxoYM/view?usp=drive_link" target="_shawn"><button className='btn-one'>Hire Me</button></a>
  </div>
</nav>
</div>
    </>
  )
    
    
  
}

export default Header