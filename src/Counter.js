import React from 'react'
import "./CSS/Counter.css";
import CountUp from 'react-countup'

const Counter = () => {
  return (

    <>
    <div className=' main-counter'>
     
          <div className='count'>
          <h1>
        <CountUp start={0} end={10} duration={5} delay={0}/>+
    </h1>
     <h4>Happy Clients</h4>
          </div>
          <div className='count'>
          <h1>
        <CountUp start={0} end={20} duration={5} delay={0}/>+
    </h1>
     <h4>Project Complete</h4>
          </div>
          <div className='count'>
          <h1>
        <CountUp start={0} end={2} duration={5} delay={0}/>+
    </h1>
     <h4>Years of Experience</h4>
    
    </div>
    </div>
    </>
  )
}

export default Counter