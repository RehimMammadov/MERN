import React from 'react'
import logo from '../assets/logo.webp'
import { Link } from 'react-router-dom'
import LaDownSvg from '../assets/chevron-down-icon.svg'

const Navbar = () => {
  return (
    <div className='navbar_main_container'>
        <Link to="/"><img className='logo' src={logo} alt="" /></Link>
        <nav>
            <ul className='header_nav'>
                <Link><li><a href>PAGES</a><img src={LaDownSvg} alt="" /></li></Link>
                <Link to="/store"><li><a>SHOP</a><img src={LaDownSvg} alt="" /></li></Link>
                <Link><li><a href>BLOG</a><img src={LaDownSvg} alt="" /></li></Link>
                <Link to="/contact"><li><a href>CONTACT US</a><img src={LaDownSvg} alt="" /></li></Link>
                <div className="login_basket">
                <Link to="/basket"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.99988 4H4.99988L5.27261 7M5.27261 7L5.82228 13.0464C5.92091 14.1314 6.86984 14.9379 7.95656 14.8602L18.3906 14.1149C19.3297 14.0479 20.0949 13.3349 20.228 12.4029L20.9999 7H5.27261Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.99988 20C9.55216 20 9.99988 19.5523 9.99988 19C9.99988 18.4477 9.55216 18 8.99988 18C8.44759 18 7.99988 18.4477 7.99988 19C7.99988 19.5523 8.44759 20 8.99988 20Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.9999 20C17.5522 20 17.9999 19.5523 17.9999 19C17.9999 18.4477 17.5522 18 16.9999 18C16.4476 18 15.9999 18.4477 15.9999 19C15.9999 19.5523 16.4476 20 16.9999 20Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </Link> 
                <Link to="/login"><svg className='login_svg' xmlns="http://www.w3.org/2000/svg" fill='#828282' data-name="Layer 1" viewBox="0 2 29 29" id="user"><path d="M14.5 2A12.514 12.514 0 0 0 2 14.5 12.521 12.521 0 0 0 14.5 27a12.5 12.5 0 0 0 0-25Zm7.603 19.713a8.48 8.48 0 0 0-15.199.008A10.367 10.367 0 0 1 4 14.5a10.5 10.5 0 0 1 21 0 10.368 10.368 0 0 1-2.897 7.213ZM14.5 7a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 14.5 7Z"></path></svg></Link>
                </div>
            </ul>
            <label for="resp_inp" id="resp_icon" style={{color: '#000'}}>
                <i class="fa-solid fa-bars"></i>
            </label>
            <input type="checkbox" id="resp_inp" />
        </nav>
    </div>
  )
}

export default Navbar
