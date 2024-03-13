import React from 'react'
import './Hero.css'

const Hero = ({Page}) => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="row">
                <div className='col-lg-4 offset-lg-4'>
                    <h5>
                        <a href="#">Home</a>
                        / {Page}
                    </h5>
                    <h3>
                    {Page}
                    </h3>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero