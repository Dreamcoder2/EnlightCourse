import React from 'react'
import Header from '../Components/Header'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import  Product  from './Product'
import Cart from './Cart'
import Checkout from './Checkout'
import Success from './Success'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'
import Contact from '../Components/Contact/Contact'








function Home() {
  return (
    <div>

      <Header/>
      <Routes>
        <Route>
        <Route path="/course" element={<Dashboard />}/>
        <Route path="/product/:id" element={<Product />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path='/checkout/'>
           <Route path='' element={<Checkout/>}/>
           <Route path=':id' element={<Checkout/>}/>
        </Route>
        </Route>
        <Route path='/success' element={<Success/>}/>
        <Route path='/' element={<About/>}/>
        <Route path='/Contact' element={<Contact />}/>
        
       
      </Routes>
      <Footer/>
    </div>
  )
}

export default Home