import React from 'react';
import "./CSS/ServicesCard.css";
import Data from './ServicesData';
import DataTwo from './ServicesDataTwo';

const ServicesCard = () => {
  return (
    <>
      <div className='main-services-card'>
        <div className='container-fluid'>
          <div className='row p-0'>
            <div className='col-md-12'>
              <div className='card-wapper'>
                {Data.map((item)=>{
                  return(
                  <div className="card">
                  <div className="card-body">
                    <i className={item.icon}/>
                    <h5 className="card-title">{item.title}</h5>
                    <ul className='card-list'>
                    {Data[0].features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
                    </ul>
                  </div>
                </div>
                )
                })}
                
              </div>
            </div>

          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className='card-wapper'>
                {DataTwo.map((itemtwo)=>{
                  return(
                  <div className="card">
                  <div className="card-body">
                    <i className={itemtwo.icon}/>
                    <h5 className="card-title">{itemtwo.title}</h5>
                    <ul className='card-list'>
                    {DataTwo[0].features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
                    </ul>
                  </div>
                </div>
                )
                })}
                
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default ServicesCard