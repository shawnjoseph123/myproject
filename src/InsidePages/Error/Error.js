import React from 'react'
import "../Error/Error.css";
import TopBar from '../../TopBar';
import { NavLink} from 'react-router-dom';
import Header from '../../Header';
const Error = () => {
  return (
    <>
    <Header/>
     <TopBar
        pageTitle="404"
      />
      <div className="main-error-container">
        <div className="container">
          <div className="row error-row">
            <div className="col-md-6 error-box">
              <h3>Opps Sorry!</h3>
              <h4>This Page is Not Found.</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and dard dummy text ever since the 1500 when an uniknown specimen book has not only five.</p>
              {/* <button className='btn-two'>Back To Home</button> */}
              <NavLink className="btn-two" to="/">Back To Home</NavLink>
              </div>
            <div className="col-md-6 error-box"> <img className="img-fluid"src='/Asset/error.webp' alt='Error404'></img></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error