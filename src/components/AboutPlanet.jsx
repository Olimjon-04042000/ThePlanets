import React from 'react'

function AboutPlanet() {
  return (
    <div className='about-planet'>
      <div className='container about-planet-container'>
        <img src="saturn.svg" alt="mercury-image"/>
        <div className='about-info'>
          <h2 className='title'>Mercury</h2>
          <p className='desc'>Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.</p>
          <p className='source'>Source : <a href="">Wikipedia <img src="link.png" alt="link" /></a></p>
          <div className='btn'>
            <p className='btn-num'>01</p>
            <p className='btn-name'>Overview</p>  
          </div>
          <div className='btn'>
            <p className='btn-num'>02</p>
            <p className='btn-name'>Internal Structure</p>  
          </div>
          <div className='btn'>
            <p className='btn-num'>03</p>
            <p className='btn-name'>Surface Geology</p>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPlanet