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
                    <a href="https://drive.google.com/file/d/1ftJzdMbgq595b3mWzwZxTmGtp3CYxoYM/view?usp=drive_link" target='_shawn'><button className='btn-two'>View Resume <i class="fa-solid fa-eye" aria-hidden="true"></i></button></a>
                </div>  
                <div className='sec-2 col-md-6 d-flex'>
                 <img src='/Asset/sj.jpg' alt='Shawn Joseph'></img>
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