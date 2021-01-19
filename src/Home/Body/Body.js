import React from 'react'
import Card from "../Card/Card"

function Body() {
return(
    <div style={{margin:"15px"}}>


<Card />

<p></p>
<p></p>
<div class="container">
  <div class="row">
    <div class="col-sm">
      
    <a style={{fontWeight: "bolder", textDecoration:"none", color: "black"}} href="https://www.instagram.com/">INSTAGRAM</a>
      <p></p>
      <p></p>
    </div>
    <div class="col-sm">
    <a style={{fontWeight: "bolder", textDecoration:"none", color: "black"}} href="https://www.facebook.com/">FACEBOOK</a>
    </div>
    <div class="col-sm">
    <a style={{fontWeight: "bolder", textDecoration:"none", color: "black"}} href="https://twitter.com/">TWITTER</a>
    </div>
    <div class="col-sm">
    <a style={{fontWeight: "bolder", textDecoration:"none", color: "black"}} href="https://www.pinterest.com/">PININTEREST</a>
    </div>
    <div class="col-sm">
    <a style={{fontWeight: "bolder", textDecoration:"none", color: "black"}} href="https://www.youtube.com/">YOUTUBE</a>
    </div>
  </div>
</div>

    </div>
)

}

export default Body