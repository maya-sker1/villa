import React from 'react'
import './Red_Button.css'
import { Link } from 'react-router-dom'

const Red_Button = ({btnR}) => {
  return (
    <div>
        <Link>
            <button className='red_button'>
                {btnR}
            </button>
        </Link>
    </div>
  )
}

export default Red_Button