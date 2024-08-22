import React from 'react'
import "./CSS/Company.css";

const Company = () => {
  return (
    <>
    <div className='main-company'>
    <div className='main-content'>
        <div className='company-tag'>
          <h5>Favourite Clients
          </h5>
        </div>
        
        <h1>Work With Trusted Comapny.</h1>
        </div>
        <div className="container-fluid company-box">
          <div className="row">
            <div className="col-md-3 company">
            <img src='/Asset/logo2.png' alt=''/>
            </div>
            <div className="col-md-3 company"><img src='/Asset/logo1.png' alt=''/></div>
            <div className="col-md-3 company"><img src='/Asset/logo.png' alt=''/></div>
            <div className="col-md-3 company"><img src='/Asset/logo4.png' alt=''/></div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Company