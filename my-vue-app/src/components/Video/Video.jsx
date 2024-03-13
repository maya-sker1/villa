import React from 'react'
import './Video.css'
import v_img from '../../assets/Image/video-frame.jpg'
import { FaPlay } from "react-icons/fa";

const Video = () => {
  return (
    <div className='video-section'>
        <div className='video-text'>
            <div className='container'>
                <div className='row'>
                    <div className=' col-lg-7 offset-lg-2'>
                        <div className='text-center'>
                            <h6>| Video View</h6>
                            <h2>Get Closer View & Different Feeling</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='video-show'>
            <div className='container'>
                <div className='row'>
                    <div className=' col-lg-10 offset-lg-1'>
                        <div className='video '>
                            <img src={v_img} alt="" />
                            <a href=""><FaPlay /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Video