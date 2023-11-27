import React from 'react'
import freeCar from '../assets/free_shipping.webp'
import support from '../assets/support247.webp'
import money from '../assets/money_back.webp'
import promotions from '../assets/promotions.webp'

const Warranty = () => {
  return (
    <div className="warranty">
        <div className="free_ship">
          <img src={freeCar} alt="" />
          <div className="text">
            <h3>FREE SHIPPING</h3>
            <p>Free shipping all order</p>
          </div>
        </div>
        <div className="free_ship">
        <img src={support} alt="" />
        <div className="text">
          <h3>SUPPORT 24/7</h3>
          <p>Support 24 hours a day</p>
        </div>
      </div>
      <div className="free_ship">
        <img src={money} alt="" />
        <div className="text">
          <h3>MONEY RETURN</h3>
          <p>30 days for free return</p>
        </div>
      </div>
      <div className="free_ship">
        <img src={promotions} alt="" />
        <div className="text">
          <h3>ORDER DISCOUNT</h3>
          <p>30 days for free return</p>
        </div>
      </div>
      </div>
  )
}

export default Warranty