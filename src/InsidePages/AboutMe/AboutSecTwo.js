import React from 'react'
import "../AboutMe/AboutSecTwo.css";
import Accordion from '../../Accordion';

const AboutSecTwo = () => {
  return (
    <>
        
      <div className="AboutSecTwo">
        
          
            <div className="AboutSecTwo-child">
              <div className="content">
            <h2>What I Provide</h2>
            <Accordion
            heading = "Design & Development"
            paragraph = " From personal sites to e-commerce stores. I can build websites for businesses, individuals, and organizations."
            target = "#flush-collapseOne"
            control = "flush-collapseOne"
            />
             
 <Accordion
            heading = "Customizations"
            paragraph = "I can create custom pages, install and customize themes, and configure plugins."
            target = " #flush-collapseTwo"
            control = "flush-collapseTwo"
            />
            <Accordion
            heading = "Technical Expertise"
            paragraph = "I handle upgrades, migrations, responsive design, SEO optimization, and website speed optimization."
            target = "#flush-collapseThree"
            control = "flush-collapseThree"
            />
           
            </div>
            </div>
            <div className="AboutSecTwo-child">
            <div className="content">
            <h2>I'm Dedicated To</h2>
            <Accordion
            heading = "Collaborating closely with you"
            paragraph = "to understand your unique vision and tailor solutions accordingly."
            target = " #flush-collapseFour"
            control = "flush-collapseFour"
            />
            <Accordion
            heading = "Delivering results-oriented services"
            paragraph = "that meet your specific goals and budget requirements."
            target = " #flush-collapseFive"
            control = "flush-collapseFive"
            />
            <Accordion
            heading = "Providing exceptional customer service"
            paragraph = "throughout the entire project lifecycle."
            target = " #flush-collapseSix"
            control = "flush-collapseSix"
            />
              </div>
            </div>
          </div>
        
       
    
    </>
  )
}

export default AboutSecTwo