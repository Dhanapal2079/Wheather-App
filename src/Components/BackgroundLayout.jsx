
import React from 'react'
import image from '../assets/images/Clear.jpg'

const BackgroundLayout = () => {
  return (
    <div>
      <img src={image} alt="weather_image" style={{width: '100%', maxWidth: '20000px', objectFit: 'cover'}} className='h-screen w-full fixed '/>
    </div>
  )
}

export default BackgroundLayout
