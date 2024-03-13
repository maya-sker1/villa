import React from 'react'
import './Map.css'
const Map = () => {
  return (
    <div className='container' >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.4743873357193!2d-80.12135612505233!3d25.952477877232567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e0!3m2!1sen!2s!4v1710246843727!5m2!1sen!2s" 
      height="500"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="Responsive Google Map "
      className='map'
      >
      </iframe>
    </div>
  )
}

export default Map