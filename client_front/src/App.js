import React from 'react'
import Navbar from './components/Navbar'
import './style/style.scss'
import './style/responsive.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BasketPage from './pages/BasketPage'
import StorePage from './pages/StorePage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer'
import SocialMedia from './components/SocialMedia'
import RegisterPage from './pages/RegisterPage'
import ProductPage from './pages/ProductPage'
import { ShopContextProvider } from './context/Shop-Context'

const App = () => {
  return (
    <div>
      {
        <Navbar />
      }
      <ShopContextProvider>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/basket' element={<BasketPage />} />
          <Route path='/store' element={<StorePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
      </ShopContextProvider>
      {
        <Footer />
      }
      {
        <SocialMedia />
      }
    </div>
  )
}

export default App