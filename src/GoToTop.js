import React from 'react';
import "./CSS/GoToTop.css";
const GoToTop = () => {

    const Top = () =>{
        window.scrollTo({top: 0, left: 0, behavior:"smooth"})
    }
  return (
      <>
     
      <button className='top-btn' onClick={Top}><i class="fa-solid fa-arrow-up btn-up"></i></button>
     
      </>
  )
}

export default GoToTop