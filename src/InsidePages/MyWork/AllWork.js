import React from 'react'
import "../MyWork/AllWork.css"
import MyPortfolios from './AllWorkData'

const AllWork = () => {
  return (
    <>
    <div className="main-all-work">
        {MyPortfolios.map((port)=>{
            return(
                <div className="items">
                    <div className="item1">
                     <img src={port.img} alt="" srcset="" />
                     <h1>{port.text}</h1>
                     <a href={port.link}><button className='btn-work'>View Site <i class="fa-solid fa-eye" aria-hidden="true"></i></button></a>
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default AllWork