import React from 'react'
import ContactImg from '../Images/Contactimg.png'

const Contact = () => {
  return (
    <div id='Contact' className="bg-cover bg-center h-64 flex items-center justify-center relative" style={{ backgroundImage: `url(${ContactImg})` }}>
      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      
      <div className="relative text-center">
        <p className="text-white text-lg font-semibold">Call Us Now</p>
        <a href="tel:+918200060000" className="text-white text-2xl font-bold mt-2 block">
          +91 82000-60000
        </a>
      </div>
    </div>
  )
}

export default Contact
