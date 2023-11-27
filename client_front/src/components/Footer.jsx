import React from 'react'
import Location from '../assets/location.svg'
import mail from '../assets/mail.svg'
import phone from '../assets/phone.svg'
import cashCards from '../assets/payment-pic.webp'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer_main_container'>
        <div className="my_account">
            <h5>My Account</h5>
            <div className="location">
                <img src={Location} alt="" />
                <p>184 Main Rd E, St Albans VIC 3021, Australia</p>
            </div>
            <div className="mail">
                <img src={mail} alt="" />
                <p>Mail Us: yourmail@gmail.com</p>
            </div>
            <div className="phone">
                <img src={phone} alt="" />
                <p> Phones: (012) 800 456 789-987</p>
            </div>
            <div className="cash_cards">
                <Link to="https://www.paypal.com/us/home"><img src={cashCards} alt="" /></Link>
            </div>
        </div>
        <div className='categories_div'>
            <div className="categories">
                <h5>Categories</h5>
                <p>Ecommerce</p>
                <p>Shopify</p>
                <p>Prestashop</p>
                <p>Opencart</p>
                <p>Magento</p>
            </div>
            <div className="categories">
                <h5>Information</h5>
                <p>Home</p>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Exchanges</p>
                <p>Shipping</p>
            </div>
            <div className="categories">
                <h5>Quick Links</h5>
                <p>Store Location</p>
                <p>My Account</p>
                <p>Orders Tracking</p>
                <p>Size Guide</p>
                <p>Contact Us</p>
            </div>
            </div>
    </div>
  )
}

export default Footer