import React from 'react'
import './Top.css'
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Top = () => {
  return (
    <div className='top'>
      
        <div className='left  '>
            <ul >
              <li><Link><MdEmail className='left_icon' />info@company.com </Link></li>
              <li><Link><FaMap   className='left_icon' /> Sunny Isles Beach, FL 33160</Link></li>
            </ul>
        </div>

        <div className='right'>
            <ul>
              <li><Link><FaFacebook  className='right_icon' /></Link></li>
              <li><Link><FaTwitter   className='right_icon' /></Link></li>
              <li><Link><FaLinkedin  className='right_icon' /></Link></li>
              <li><Link><FaInstagram className='right_icon' /></Link></li>
            </ul>
        </div>
        <br />
        <hr />

    </div>
  )
}

export default Top