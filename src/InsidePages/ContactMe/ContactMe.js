import React from 'react'
import TopBar from '../../TopBar';
import "../ContactMe/ContactMe.css";
import emailjs from "@emailjs/browser";
import Header from '../../Header';
const ContactMe = () => {

const sendEmail = (e)=>{
  e.preventDefault();
 emailjs.sendForm('service_m6ndtaw', 'template_0vmv2r8', e.target, 'k_yYezXSgNsCKQZIZ');
}
  
  return (
    <div>
      <Header/>
      <TopBar
        pageTitle="Contact Me"
      />
      <div className="main-contact-container">
        <div className="container">
          <div className="row contact-row">
            <div className="col-md-4 contact-box first-contact-box">
              <div className="info-box">
                <h4>Phone</h4>
                <p>+92-3112900737</p>
              </div>
              <div className="info-box">
              <h4>E-mail</h4>
              <p>shawnjoseph447@gmail.com</p>
              </div>
              <div className="info-box">
              <h4>Phone</h4>
              <p>+323112900737</p>
              </div>
              <div className="info-box">
              <h4>Follow Me</h4>
              <div className="col-md-4 footer-info">
                            <i className="fa fa-facebook-official footer-icon" aria-hidden="true"></i>
                            <i className="fa fa-instagram footer-icon" aria-hidden="true"></i>
                            <i className="fa fa-linkedin-square footer-icon" aria-hidden="true"></i>
                            </div>
              </div>
            </div>
            <div className="col-md-8 contact-box">
              <div className='main-content'>
                <div className='client-tag'>
                  <h5>Get In Touch
                  </h5>
                </div>

                <h1>If you have any project or need help. Contact me</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting emndustry lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print only five centuries, but also the leap into electronic.</p>
              </div>
              <form onSubmit={sendEmail}>
                <div class="row form-row">
                  <div class="col-md-6">
                    <input type="text" class="form-control"  name ="name"  placeholder="Name" aria-label="name" required/>
                  </div>
                  <div class="col-md-6">
                    <input type="email" class="form-control" name ="email" placeholder="Email" aria-label="email" required/>
                  </div>
                </div>
                <div class="row form-row">
                  <div class="col-md-6">
                    <input type="number" class="form-control" name ="number" placeholder="Number" aria-label="number" required/>
                  </div>
                  <div class="col-md-6">
                    <input type="text" class="form-control" name ="subject" placeholder="Subject" aria-label="subject"required />
                  </div>
                </div>
                <div class="mb-3">
                <textarea type="text" class="form-control"  name ="message" placeholder="Your Message" aria-label="Last name" rows="3"required/>
                
</div>
<button className='btn-two'>Submit Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe