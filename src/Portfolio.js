import React from 'react'
import "./CSS/Portfolio.css";
import { NavLink} from 'react-router-dom';
const Portfolio = () => {
  return (
    <>
      <div className='main-portfolio'>
        <div className='main-content'>
        <div className='portfolio-tag'>
          <h5>Awesome Portfolio
          </h5>
        </div>
        
        <h1>My Complete Projects</h1>
        </div>
        <div className='main-portfolio-two'>
        <div className='portfolio-container'>
          <div className='portfolio'>
            <img src='/Asset/Eracos.jpg' alt='' className="img"/>
          </div>
          <div className='portfolio'>
            <img src='/Asset/sprachschule.jpg' alt='' className="img"/>

          </div>
          <div className='portfolio'>
            <img src='/Asset/Imperial.jpg' alt='' className="img"/>
          </div>
        </div>
        <div className='portfolio-container'>
          <div className='portfolio'>
            <img src='/Asset/fancyspace.jpg' alt=''className="img" />
          </div>
          <div className='portfolio'>
            <img src='/Asset/Flyride.jpg' alt='Flyride' className="img"/>
          </div>
          <div className='portfolio'>
            <img src='/Asset/HomeStoreUk.jpg' alt=''className="img" />
          </div>
        </div>
        </div>

        
        <NavLink className="btn-two" to="/work">View More<i class="fa-solid fa-eye"/></NavLink>

      </div>


    </>
  )
}

export default Portfolio