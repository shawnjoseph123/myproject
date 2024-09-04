import React from 'react'
import "../AboutMe/AboutTabs.css";
import myexperience from "./experience";
import myeducation from "./education";
const AboutTabs = () => {
  return (
    <>
    <div className="main-tab-container">
      <div className="tabs-second">
     <ul className="nav nav-pills" id='pills-tab'>
  <li className="nav-item">
    <a className="nav-link active" data-bs-toggle="pill" href="#experience">Experience</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-bs-toggle="pill" href="#education">Education</a>
  </li> 
    </ul>
    </div>
    <div className="tab-content py-3" id='myTabContent'>
    <div className="tab-pane fade" id='experience'>
          <div className="main-tab-content">
         
         {myexperience.map((exp)=>{
            return(
              <div className="experience">
              <h3>
              {exp.position}
            </h3>
            <h4>
           {exp.company}
            </h4>
            <h4>
            {exp.time}
            </h4>
            <ul>
            {myexperience[0].duties.map((duties, index) => (
        <li key={index}>{duties}</li>
      ))}
            </ul>
            <hr />
            </div>
            )
          })}
       
        </div>
     </div>
     <div className="tab-pane fade show active" id='education'>
        <div className="main-tab-content">
        {myeducation.map((edu)=>{
            return(
         <div className="education">
          <h3>
          {edu.degree}
          </h3>
          <h4>
         {edu.institute}
          </h4>
          <h4>
          {edu.duration}
          </h4>
          <hr />
          </div>
            )
          })}
     </div>
        </div>
        </div>
     
       

    </div>
      </>
  )
}

export default AboutTabs