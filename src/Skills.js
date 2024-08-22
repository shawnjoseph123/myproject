import React from 'react'
import "./CSS/Skills.css";

const Skills = () => {

  return (
    <>
     <div className='main-skills-sec'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 skills-sec'>
          <div className='skills-tag'>
            <h5>Special Skills</h5>
        </div>
        <h1>My Special Skill Field Here.</h1>
        <button className='btn-two'>Get Resume <i class="fa fa-download" aria-hidden="true"></i></button>
          </div>
          <div className='col-md-6 progress-bar-sec'>
          <div className='progress-main'>
            <h6>Communication</h6>
            <div className='progress'>
            <div className='progress-bar progress-bar-striped progress-bar-animated' style={{width:"80%"}}><span className='progress-text'>80%</span>
            </div>
            </div>
          </div>
          
          <div className='progress-main'>
          <h6>Leadership</h6>
            <div className='progress'>
            <div className='progress-bar progress-bar-striped progress-bar-animated' style={{width:"75%"}}><span className='progress-text'>75%</span></div>
            </div>
          </div>
          <div className='progress-main'>
          <h6>Teamwork</h6>
            <div className='progress'>
            <div className='progress-bar progress-bar-striped progress-bar-animated' style={{width:"90%"}}><span className='progress-text'>90%</span></div>
            </div>
          </div>
          <div className='progress-main'>
          <h6>Flexibility</h6>
            <div className='progress'>
            <div className='progress-bar progress-bar-striped progress-bar-animated' style={{width:"95%"}}><span className='progress-text'>95%</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
     </div>
    </>
  )
}

export default Skills