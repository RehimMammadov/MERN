import React from 'react'
import instagram_1 from '../assets/instagram-1.webp'
import instagram_2 from '../assets/instagram-2.webp'
import instagram_3 from '../assets/instagram-3.webp'
import instagram_4 from '../assets/instagram-4.webp'
import instagram_5 from '../assets/instagram-5.webp'
import instagram_6 from '../assets/instagram-6.webp'
import instagram_7 from '../assets/instagram-7.webp'

const Instagram = () => {
  return (
    <div className='instagram_container'>
        <h1>Instagram</h1>
        <p>Displays an Instagram feed of your photos from your Instagram account on your website.</p>
        <div className="insta_main_container">
            <img src={instagram_1} alt="" />
            <img src={instagram_2} alt="" />
            <img src={instagram_3} alt="" />
            <img src={instagram_4} alt="" />
            <img src={instagram_5} alt="" />
            <img src={instagram_6} alt="" />
            <img src={instagram_7} alt="" />
        </div>
    </div>
  )
}

export default Instagram