import React from 'react';
import Header from './Header';
import Home from './Home';
import MyServicesPage from "./InsidePages/MyServices/MyServicesPage"
import MyWorkPage from "./InsidePages/MyWork/MyWorkPage"
import AboutMe from "./InsidePages/AboutMe/AboutMe"
import MyPartner from "./InsidePages/MyPartner/MyPartner"
import ContactMe from "./InsidePages/ContactMe/ContactMe"
import { Routes, Route } from 'react-router-dom';
import Footer from './Footer';
const App = () => {


  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<MyServicesPage/>}/>
      <Route path='/work' element={<MyWorkPage/>}/>
      <Route path='/about' element={<AboutMe/>}/>
      <Route path='/partner' element={<MyPartner/>}/>
      <Route path='/contact' element={<ContactMe/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App