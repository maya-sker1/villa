import React from 'react'
import './Best_Deal.css'
import deal_img from '../../assets/Image/deal-01.jpg'
import { Link } from 'react-router-dom'
import Black_Button from '../Black_Button/Black_Button'
import Red_Button from '../Red_Button/Red_Button'
import { FaCalendar } from "react-icons/fa";

const Best_Deal = ({Space ,Floor ,rooms ,Parking ,Payment ,info}) => {
return (
    <div className='deal_section'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 col-sm-12'>
                    <div className='deal-top'>
                        <h6>| Best Deal</h6>
                        <h2>Find Your Best<br/> Deal Right<br/> Now!</h2>
                    </div>
                </div>
                <div className='col-lg-8 col-sm-12 button_section'>
                    <div className='buttons'>
                        <Red_Button btnR="Appartment"  />
                        <Black_Button btnB="Villa House" />
                        <Black_Button btnB="Penthouse"   />
                    </div>
               </div>
    </div>



            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-sm-12 part1'>
                        <ul>
                            <li>
                            Total Flat Space 
                            <span>{Space}</span>
                            </li>
                            <li>
                            Floor number 
                            <span>{Floor}</span>
                            </li>
                            <li>
                            Number of rooms 
                            <span>{rooms}</span>
                            </li>
                            <li>
                            Parking Available 
                            <span>{Parking}</span>
                            </li>
                            <li>
                            Payment Process 
                            <span>{Payment}</span>
                            </li>
                        </ul>

                    </div>
                    <div className='col-lg-6 col-sm-12 part2' >
                        <img src={deal_img} alt="" className='img' />

                    </div>
                    <div className='col-lg-3 col-sm-12 part3'>
                        <h4>{info}</h4>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        do eiusmod tempor pack incididunt ut labore et dolore 
                        magna aliqua quised ipsum suspendisse.
                        <br />
                        <br />
                        When you need free CSS templates, you can simply type TemplateMo in any search engine website.
                        In addition, you can type TemplateMo Portfolio, 
                        TemplateMo One Page Layouts, etc.
                        </p>
                        <div className="wrapper">
                            <button className='oval'>Schedule a visit</button><button className='circl'><FaCalendar /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Best_Deal