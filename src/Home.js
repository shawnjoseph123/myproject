import React from 'react'
import MainBanner from './MainBanner';
import Services from './Services';
import Skills from './Skills';
import Counter from './Counter';
import Portfolio from './Portfolio';
import Client from './Client';
import Company from './Company';
import Header from './Header';

const Home = () => {
  return (
    <>
     <Header/>
    <MainBanner/>
    <Services/>
    <Skills/>
    <Counter/>
    <Portfolio/>
    <Client/>
    <Company/>
   </>
  )
}

export default Home