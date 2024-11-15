import React, { useEffect, useState } from "react";
import "./header.css";
import headerusericon from "../../../assets/Headerassets/headerusericon.svg";
import carticon from "../../../assets/Headerassets/carticon.svg";
import Bottel from "../../../assets/Headerassets/438945-ff5722 (1).png";

import { Link } from "react-router-dom";
// import { Icon, IconButton } from "@mui/material";

// import Stack from '@mui/material/Stack';
export default function Header() {
  // window.addEventListener("scroll", function () {
  //   const header = document.querySelector(".headerm");
  //   if (window.scrollY > 0) {
  //     header.classList.add("scrolling");
  //   } else {
  //     header.classList.remove("scrolling");
  //   }
  // });
  // window.scroll(function () {
  //   if (this.scrollTop() > 100) {
  //     // If the user has scrolled 100 pixels or more
  //     "body".addClass("scrolled"); // Add the 'scrolled' class to the body element
  //   } else {
  //     "body".removeClass("scrolled"); // Otherwise, remove the 'scrolled' class from the body element
  //   }
  // });


  return (
    <div className="headerm">
  
      <div
        className="cmpny-logo"
        style={{ alignItems: "center", display: "inline-flex", marginTop: 0 }}
      >
        <img   style={{  height: "68px",marginRight: "-15px", }}
          src={Bottel}
        ></img>
        <span style={{ fontSize: "70px", marginLeft: "0", marginTop: "-15%" }}>
          ૨
        </span>
        <div style={{ marginTop: "auto", marginBottom: "auto" }}>
          <span>Wιɳҽ</span>
          <br></br>
          <span>𝐵𝒶𝓇</span>
        </div>
      </div>

      <div className="input-search">
        <input
          style={{ border: "none" }}
          type="text"
          className="search-input"
          placeholder="  🔍   Search"
          // onChange={handleChange}
        ></input>
      </div>

      <Link to={"/cart"}>
        <img src={carticon}></img>
      </Link>

      <Link to="/account">   
        <img src={headerusericon}></img>
      </Link>

      <div className="header-dp">
        <img // src={"avatar"}
        ></img>
      </div>
    </div>
  );
}
