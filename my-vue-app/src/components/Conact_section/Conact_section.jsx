import React from 'react'
import './Conact_section.css'
import Map from '../Map/Map'
import Info_Item from '../Info_Item/Info_Item'
import phone from '../../assets/Image/phone-icon.png'
import email from '../../assets/Image/email-icon.png'
import Form from '../Form/Form'
const Conact_section = () => {
  return (
    <div className='conact'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 offset-lg-4'>
                    <div className='top_conact text-center'>
                        <h6>| Contact Us</h6>
                        <h2>
                        Get In Touch With Our Agents
                        </h2>
                    </div>
                </div>
            </div>
        </div>

        <div className='container content'>
            <div className='row'>
                <div className='col-lg-7 col-lsm-12 map'>
                    <Map />
                    <div className='row'>
                        <div className='col-lg-6'>
                          <Info_Item img={phone} text="010-020-0340" />
                        </div>
                        <div className='col-lg-6'>
                          <Info_Item img={email} text="info@villa.co" />
                        </div>
                    </div>
                </div>
                <div className='col-lg-5 col-sm-12 form'>
                        <Form />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Conact_section