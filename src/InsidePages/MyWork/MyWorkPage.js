import React from 'react'
import TopBar from '../../TopBar';
import AllWork from './AllWork';
import Header from '../../Header';
const MyWorkPage = () => {
  return (
    <>
    <Header/>
    <TopBar
    pageTitle = "My Work"
    />
    <AllWork/>
    </>
  )
}

export default MyWorkPage