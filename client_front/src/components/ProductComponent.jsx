import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById, getProductCountById, getProductPropertiesById } from '../actions/MainAction';
import { ShopContext } from '../context/Shop-Context';

const ProductComponent = () => {
    const { addToCart, cartItems } = useContext(ShopContext);
    const productsCount = useSelector(state => state.Data.productsCount);
    const productsData = useSelector(state => state.Data.productsData);
    const productproperties = useSelector(state => state.Data.productproperties);
    const dispatch = useDispatch();
    const params = useParams();
    
    useEffect(() => {
      dispatch(getProductById(params.id))
    }, [])
  
    useEffect(() => {
      dispatch(getProductPropertiesById(1))
    }, []);

  return (
    <div className='product_main_container'>
        <div className="product_left">
          <img src={"http://localhost:5000/"+productsData.image} alt="" />
        </div>
        <div className="product_right">
          <h1>{productsData.title}</h1>
          <div className="price_discountPrice">
              <span className='discountPrice'>${productsData.discountPrice}.00</span>
              <span className='price'>${productsData.price}.00</span>
          </div>
          <p>{productproperties.title}</p>
          <div className="quantity_buy">
            <button onClick={() => addToCart(productsCount.id)}>Add To Cart</button>
          </div>
        </div>
      </div>
  )
}

export default ProductComponent