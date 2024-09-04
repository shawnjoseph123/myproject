import React from 'react'
import "./CSS/TopBar.css";

const TopBar = ({pageTitle}) => {
  return (
    <div className="main-topbar">
        <h1>{pageTitle}</h1>
            <h6> Home || {pageTitle}</h6>  
    </div>
  )
}

export default TopBar