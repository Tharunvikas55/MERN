import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo1.png'
import cart from '../Assets/shoppingCart.png'
// import { set } from 'mongoose'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu,setMenu]=useState("products");
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" width="40px" height="40px"/>
        <p>shopper</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("products")}}> <Link to='/product' style={{textDecoration:'none'}} >Products</Link>  {menu==="products"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("about")}} >  <Link to='/about' style={{textDecoration:'none'}} >About</Link> {menu==="about"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("contact")}} >  <Link to='/contact' style={{textDecoration:'none'}} >Contact</Link> {menu==="contact"?<hr/>:<></>}</li>  
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>login</button></Link>
        <Link to='/cart'><img src={cart} alt="" width="30px" height="30px" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
