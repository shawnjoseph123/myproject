import React from 'react'
import TopBar from '../../TopBar';
import AboutSecOne from './AboutSecOne';
import AboutSecTwo from './AboutSecTwo';
import AboutTabs from './AboutTabs';
import Counter from '../../Counter';
import Client from '../../Client';
import Company from '../../Company';
import Header from '../../Header';

const AboutMe = () => {
  return (
    <div> 
        <Header/> 
    <TopBar
    pageTitle= "About Me"
   />
   <AboutSecOne/>
   <AboutSecTwo/>
   <AboutTabs/>
   <Counter/>
   <Client/>
   <Company/>
   </div>
  )
}

export default AboutMe