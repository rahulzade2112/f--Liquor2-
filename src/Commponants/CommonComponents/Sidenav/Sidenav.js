import React from "react";
import "./sidenav.css";
import { Link } from "react-router-dom";

export default function Sidenav() {
  return (
    <div>
      {/* <div class="background">
  <button class="menu__icon">
    <span></span>
    <span></span>
    <span></span>
  </button>
</div> */}
      <div className="sidenav-container1">
        {/* <header className="navOfHeader" id="mobile-sidenav"> */}
          <ul>
          <Link to={"/"}><li>HOME</li></Link> 
          <Link to={""} ><li>SPIRITS</li></Link> 
          <Link><li>MIXERS & FRUIT</li></Link>  
          <Link to={"/champange"}><li>CHAMPAGNE </li></Link>
          <Link to={"/SPIRITS"}><li>WINE</li></Link>
          <Link><li>ONSALE</li></Link>
          <Link><li>BLOG</li></Link> 
          <Link><li>CONTACT</li></Link> 
          <Link><li>CLAIMS</li></Link> 

          </ul>
        {/* </header> */}
      </div>
    </div>
  );
}
