import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CSS/Client.css";
import ReviewData from './ClientData';

const Client = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };
    return (
        <>
            <div className='main-client-sec'>
                <div className='main-content'>
                    <div className='client-tag'>
                        <h5>Testimonial
                        </h5>
                    </div>

                    <h1>Satisfied Clients Say</h1>
                </div>
                <div className='review'>
                    <Slider {...settings}>
                    {ReviewData.map((props)=>{
                        return(
                        <div className='client'>
                            <i className={props.icon} aria-hidden="true" />
                            <p>{props.review}</p>
                            <h5>{props.ceo}</h5>
                            <p>{props.company}</p>
                        </div>
                        )
                    })}
                
                    </Slider>
                </div>

                <div className='review-mob'>
                {ReviewData.map((props)=>{
                        return(
                        <div className='client'>
                            <i className={props.icon} aria-hidden="true" />
                            <p>{props.review}</p>
                            <h5>{props.ceo}</h5>
                            <p>{props.company}</p>
                        </div>
                        )
                    })}
                </div>
                 


            </div>
        </>
    )
}

export default Client