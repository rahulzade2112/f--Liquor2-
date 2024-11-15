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
          <Link to={"/"}><li>Home</li></Link> 
          <Link><li>2</li></Link> 
          <Link><li>3</li></Link>  
          <Link><li>4</li></Link>
          <Link><li>5</li></Link>
          <Link><li>6</li></Link> 
          <Link><li>7</li></Link> 
          </ul>
        {/* </header> */}
      </div>
    </div>
  );
}
