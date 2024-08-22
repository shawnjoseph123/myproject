import React from 'react'
import "./CSS/header.css";

const Header = () => {
  return (
    <>
    <div classNameName='main-header'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-4 fixed-top">
  <div className="container-fluid ">
    <a className="navbar-brand" href="/"><img src='/Asset/shawnlogo.png' alt='Shawn Joseph'></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     
      <i class="fa fa-bars" aria-hidden="true"></i>
     
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
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