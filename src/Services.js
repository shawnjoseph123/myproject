import React from 'react';
import ServicesCard from './ServicesCard';
import "./CSS/Services.css";

const Services = () => {
  return (
    <>
     <div className='services-main-container'>
     <div className='main-content'>
        <div className='services-tag'>
            <h5>My Service</h5>
        </div>
        
        <h1>Service Provide For My Clients.</h1>
        </div>
        <ServicesCard/>
     </div>
    </>
  )
}

export default Services