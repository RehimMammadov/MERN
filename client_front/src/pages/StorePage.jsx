import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/MainAction';
import leftArrow from '../assets/leftArrow.svg'
import rightArrow from '../assets/rightArrow.svg'
import {useNavigate} from "react-router-dom"

const StorePage = () => {
  const products = useSelector(state => state.Data.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sliderRef = useRef(null);
  const [currentPosition, setCurrentPosition] = useState(0);

  const slide = (direction) => {
    const slider = sliderRef.current;
    const cardWidth = slider.firstChild.offsetWidth;
    const marginRight = parseInt(window.getComputedStyle(slider.firstChild).marginRight);
    const step = direction === 'prev' ? cardWidth + marginRight : -(cardWidth + marginRight);
    const totalWidth = (cardWidth + marginRight) * slider.children.length - marginRight;

    let newPosition = currentPosition + step;

    if (newPosition > 0) {
    newPosition = 0;
    } else if (newPosition < -totalWidth + cardWidth) {
    newPosition = -totalWidth + cardWidth;
    }

    setCurrentPosition(newPosition);
}
  
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
    <div className="store">
      <img className='store_arr' src={leftArrow} alt="" onClick={() => slide('prev')} style={{cursor: 'pointer'}} />
      <div className='store_main_container' ref={sliderRef} style={{ transform: `translateY(${currentPosition}px)` }}>
      {
        products?.map((data, i) => {
          return(
            <div className="store_card" key={i} value={data?.id}>
                <div className="img_frame" onClick={() => navigate(`/product/${data?.id}`)}>
                  <div className="new">
                    <span>NEW</span>
                  </div>
                  <img src={"http://localhost:5000/"+data?.image} alt="" />
                </div>
                <p>{data?.title}</p>
                <div className="price_discountPrice">
                  <span className='discountPrice'>${data?.discountPrice}.00</span>
                  <span className='price'>${data?.price}.00</span>
                </div>
            </div>
          ) 
        })
      }
      </div>
      <img className='store_arr' src={rightArrow} alt="" onClick={() => slide('next')} style={{cursor: 'pointer'}} />
    </div>
  )
}

export default StorePage