import React from 'react'
import './ListStyle.css'
import icon1 from '../../assets/Image/info-icon-01.png'
import icon2 from '../../assets/Image/info-icon-02.png'
import icon3 from '../../assets/Image/info-icon-03.png'
import icon4 from '../../assets/Image/info-icon-04.png'
const List = () => {
  return (
    <div className='lists'>
        <ul>
            <li>
                <img src={icon1} alt="" className='icon' />
                <h4>
                    250 m2
                    <br/>
                    <span>Total Flat Space</span>
                </h4>
            </li>
            <li>
                <img src={icon2} alt="" className='icon' />
                <h4>
                    Contract
                    <br />
                    <span>Contract Ready</span>
                </h4>
            </li>
            <li>
                <img src={icon3} alt="" className='icon' />
                <h4>
                    Payment
                    <br />
                    <span>Payment Process</span>
                </h4>
            </li>
            <li>
                <img src={icon4} alt="" className='icon' />
                <h4>
                    Safety
                <br />
                <span>24/7 Under Control</span>

                </h4>
            </li>
        </ul>
    </div>
  )
}

export default List