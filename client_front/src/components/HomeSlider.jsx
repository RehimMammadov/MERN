import React, { useState } from 'react'
import leftArr from '../assets/reshot-icon-arrow-left-CYVEH429PZ.svg'
import rightArr from '../assets/reshot-icon-arrow-right-LA2EJ39WDT.svg'
import { useNavigate } from 'react-router-dom';

const HomeSlider = () => {
    const [offset, setOffset] = useState(100);

    const handleSliderRightClick = () => {
        let newOffSet = offset + 50;
        if(newOffSet >= 50) {
            newOffSet = offset - 50
        } 
        setOffset(newOffSet)
    }

    const handleSliderLeftClick = () => {
        let newOffset = offset - 50;
        if (newOffset <= 0) {
          newOffset = offset + 50;
        }
        setOffset(newOffset);
      };
    
    const navigate = useNavigate();

  return (
    <div className="slider">
        <div className="main_slider" style={{transform: `translateX(-${-offset}%)`}}>
        <div className='main_slider_1'>
            <img onClick={handleSliderLeftClick} className='left_slider_arr' src={leftArr} alt="" />
            <div className="slider_text">
                <span><i>Valentine Gift</i></span>
                <h1>Fresh Your Mind & Feeling Love</h1>
                <button onClick={() => navigate(`/store`)}>Shop Now</button>
            </div>
            <img onClick={handleSliderRightClick} className='right_slider_arr' src={rightArr} alt="" />
        </div>
        <div className='main_slider_2'>
        <img onClick={handleSliderLeftClick} className='left_slider_arr' src={leftArr} alt="" />
            <div className="slider_text">
                <span><i>Valentine Gift</i></span>
                <h1>Fresh Your Mind & Feeling Love</h1>
                <button onClick={() => navigate(`/store`)}>Shop Now</button>
            </div>
        <img onClick={handleSliderRightClick} className='right_slider_arr' src={rightArr} alt="" />
        </div>
    </div>
    </div>
  )
}

export default HomeSlider