import React from 'react'
import "./CSS/MainBanner.css";

const MainBanner = () => {
  return (
    <>
      <div className='main-container'>
        <div className='container-fluid'>
            <div className='row flex-column-reverse flex-md-row'>
                <div className='sec-1 col-md-6 justifiy-content-center'>
                    <h2>Hello! I’m</h2>
                    <h1>Shawn Joseph</h1>
                    <p>Web Developer | WordPress Shopify Expert</p>
                    <button className='btn-two'>Get Resume <i class="fa fa-download" aria-hidden="true"></i></button>
                </div>  
                <div className='sec-2 col-md-6 d-flex'>
                 <img src='/Asset/shawn.png' alt='Shawn Joseph'></img>
                 <div className='social'>
                <i class="fa fa-facebook-official social-icons" aria-hidden="true"></i>
                <i class="fa fa-instagram social-icons" aria-hidden="true"></i>
                <i class="fa fa-whatsapp social-icons" aria-hidden="true"></i>
                <i class="fa fa-linkedin-square social-icons" aria-hidden="true"></i>
                </div>
                </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default MainBanner