import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import cancel from '../assets/icons8-cancel.svg'
import { getProductById } from '../actions/MainAction';
import { ShopContext } from '../context/Shop-Context';


const BasketComponent = () => {
    const { cartItems, getTotalCartAmount, checkout, addToCart, removeFromCart } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const products = useSelector(state => state.Data.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
      dispatch(getProductById(params.id))
    }, [])

  return (
    <div className='cart_basket'>
      <div className='basket'>
        <h1>Cart</h1>
      </div>
      <div className='phonebasket_main_container'>
        {
          products?.map((product) => {
            if(cartItems[product.id] !== 0) {
              return (
                <div className="phonebasket_product">
                    <div className="pb_product_img">
                        <img src={"http://localhost:5000/"+product?.image} onClick={() => navigate(`/product/${product?.id}`)} alt="" />
                    </div>
                    <div className="pb_product_text">
                        <h4>{product?.title}</h4>
                        <div className="count_price">
                            <span>{product?.discountPrice}.00$</span>
                            <div className="add_remove">
                              <button className='add' onClick={() => addToCart()}>+</button>
                              <button className='remove' onClick={() => removeFromCart()}>-</button>
                            </div>
                        </div>
                    </div>
                    <img className='cancel' src={cancel} alt="" style={{cursor: 'pointer'}} />
                </div>
              )
            }
          })
        }
        {
          totalAmount > 0 ? (
            <div className="sub">
              <div className="sub_total">
                  <h4>Sub-Total</h4>
                  <span>${totalAmount}.00</span>
              </div>
              <div className="sub_total">
                  <h4>VAT</h4>
                  <span>$60.00</span>
              </div>
              <div className="sub_total">
                  <h4>Total</h4>
                  <span>${totalAmount+60}.00</span>
              </div>
            </div>
          ): null
        }
        <button className='checkout' onClick={() => checkout(navigate("/"))}>checkout</button>
    </div>
    </div>
  )
}

export default BasketComponent