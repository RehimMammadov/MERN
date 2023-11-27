import React, { useEffect } from 'react'
import Warranty from '../components/Warranty'
import HomeSlider from '../components/HomeSlider'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProducts } from '../actions/MainAction'
import Instagram from '../components/Instagram'

const HomePage = () => {
  const products = useSelector(state => state.Data.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
    <div>
      <HomeSlider />
      <Warranty />
      <div className="home_store">
        <h1>New Products</h1>
        <p className='accumsan'>Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque libero</p>
            <div className="store_height">
                <div className="store">
                <div className='store_main_container'>
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
                </div>
            </div>
            <div className="view_more_container">
                <button onClick={() => navigate(`/store`)} className='view_products'>View More Products</button>
            </div>
            </div>
        <Instagram />
      </div>
  )
}

export default HomePage