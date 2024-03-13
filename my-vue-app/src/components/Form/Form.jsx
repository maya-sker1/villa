import React from 'react'
import './Form.css'
const Form = () => {
  return (
    <div className='conact_form'>
        <form action="">
            <div>
                <label for='name'>Full Name</label>
                <input type="text" placeholder='Your Name' />
            </div>
            <div>
                <label for='name'>Email Address</label>
                <input type="email" placeholder='Your E-mail' />
            </div>
            <div>
                <label for='name'>Subject</label>
                <input type="text" placeholder='Subject' />
            </div>
            <div>
                <label for='name'>Message</label>
                <textarea type="text" placeholder='Your Message' />
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    </div>
  )
}

export default Form