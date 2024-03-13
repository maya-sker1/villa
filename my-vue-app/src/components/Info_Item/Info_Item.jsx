import React from 'react'
import './Info_Item.css'
const Info_Item = ({img ,text}) => {
  return (
    <div className='items d-flex'>
        <img src={img} alt="" />
        <h6>{text}</h6>
    </div>
  )
}

export default Info_Item