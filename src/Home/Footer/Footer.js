import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
    return (

        <div style={{backgroundColor: "black", color: "white"}}>
            
            
           <br></br>
           <br></br> 
           

<div style={{fontFamily: 'var(--bs-font-sans-serif)', color: "gray", lineHeight: "0.8"}} class="container">
  <div class="row">
    <div class="col-sm">
      <h4 style={{fontSize: "18px", color: "white", lineHeight: "1.5"}}>HELP</h4>
      <p><a style={{color: "gray"}} href="#">Shop</a></p>
      <p><a style={{color: "gray"}} href="#">MyAccount</a></p>
      <p><a style={{color: "gray"}} href="#">Product</a></p>
      <p><a style={{color: "gray"}} href="#">Payment</a></p>
      <p><a style={{color: "gray"}} href="#">Shipping</a></p>
      <p><a style={{color: "gray"}} href="#">Returns and Exchanges</a></p>
    </div>
    <div class="col-sm">
    <h4 style={{fontSize: "18px", color: "white", lineHeight: "1.5"}}>FOLLOW US</h4>
      <p><a style={{color: "gray"}} href="#">Instagram</a></p>
      <p><a style={{color: "gray"}} href="#">Facebook</a></p>
      <p><a style={{color: "gray"}} href="#">Twitter</a></p>
      <p><a style={{color: "gray"}} href="#">YouTube</a></p>
      <p><a style={{color: "gray"}} href="#">Snapchat</a></p>

    </div>
    <div class="col-sm">
    <h4 style={{fontSize: "18px", color: "white", lineHeight: "1.5"}}>COMPANY</h4>
    <p><Link style={{color: "gray"}} to="/about">about</Link></p>
    <p><Link style={{color: "gray"}} to="/contact">Contact</Link></p>
      <p><a style={{color: "gray"}} href="#">Sitemap</a></p>
    </div>
    <div class="col-sm">
    <h4 style={{fontSize: "18px", color: "white", lineHeight: "1.5"}}>POLICIES</h4>
      <p><a style={{color: "gray"}} href="#">Privacy Policy</a></p>
      <p><a style={{color: "gray"}} href="#">Purchase Conditions</a></p>
      <p><a style={{color: "gray"}} href="#">Cookies settings</a></p>
    </div>
  </div>
  <p style={{color: "grey", fontSize: "15px", lineHeight: "3"}}>Copyright© 2021 All Rights Reserved <Link style={{color: "gray", textDecoration: "none"}} to="/">HATIFY</Link></p>
</div>



        </div>
    )
}
 export default Footer 