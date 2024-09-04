import React from 'react'
import MainBanner from './MainBanner';
import Services from './Services';
import Skills from './Skills';
import Counter from './Counter';
import Portfolio from './Portfolio';
import Client from './Client';
import Company from './Company';
import Footer from './Footer';

const Home = () => {
  return (
    <>
    <MainBanner/>
    <Services/>
    <Skills/>
    <Counter/>
    <Portfolio/>
    <Client/>
    <Company/>
    <Footer/>
   </>
  )
}

export default Home