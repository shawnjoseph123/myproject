import React from 'react'
import "./CSS/Footer.css";
import GoToTop from './GoToTop.js';
const Footer = () => {
    return (
        <>
            <footer>
                <div className="main-footer">
                    <div className="container-fluid">
                        <div className="row footer-row">
                            <div className="col-md-4 footer-info"><i className="fa-solid fa-mobile footer-icon-small"></i><p><a href=' https://wa.me/+923112900737'>+923112900737</a></p></div>
                            <div className="col-md-4 footer-info"><i className="fa-solid fa-envelope footer-icon-small"></i><p><a href='mailto: shawnjoseph447@gmail.com'>shawnjoseph447@gmail.com</a></p></div>
                            <div className="col-md-4 footer-info">
                            <i className="fa fa-facebook-official footer-icon" aria-hidden="true"></i>
                            <i className="fa fa-instagram footer-icon" aria-hidden="true"></i>
                            <i className="fa fa-linkedin-square footer-icon" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="container after-footer-main">
                    <div className="row after-footer flex-column-reverse flex-md-row">
                        <div className="col-md-4 after-footer-box"><p>© <span>2024</span> Developed By <span>Shawn Joseph</span></p></div>
                        <div className="col-md-3 after-footer-box">
                            <img src='/Asset/shawnlogo.png' alt='Shawn Joseph'></img>
                            <GoToTop/>
                            </div>
                       
                    </div>
                </div>
                </div>
            </footer>
        </>
    )
}

export default Footer