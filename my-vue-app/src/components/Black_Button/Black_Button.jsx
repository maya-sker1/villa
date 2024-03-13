import React from 'react'
import './Black_Button.css'
import { Link } from 'react-router-dom'
const Black_Button = ({btnB}) => {
  return (
    <div>
        <Link>
            <button className='black_button'>
                {btnB}
            </button>
        </Link>
    </div>
  )
}

export default Black_Button