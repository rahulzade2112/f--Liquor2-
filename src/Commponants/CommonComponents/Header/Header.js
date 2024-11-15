import React, { useContext,useEffect, useState } from "react";
import "./header.css";
import headerusericon from "../../../assets/Headerassets/headerusericon.svg";
import carticon from "../../../assets/Headerassets/carticon.svg";
import Bottel from "../../../assets/Headerassets/438945-ff5722 (1).png";
import { isExpired, decodeToken } from "react-jwt";
import { Link } from "react-router-dom";
import { searchContext } from "../../../Context/searchContext";

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
  const { searchVariable, updateSearchVariable } = useContext(searchContext);
  var [decodedData, setFullData] = useState();

  const handleChange = (e) => {
    updateSearchVariable(e.target.value);
  };  
  useEffect(() => {
    var token = localStorage.getItem("token");
    setFullData(decodeToken(token));
  }, []);


  return (
    <div className="headerm">
      <header
        className="cmpny-logo"
        style={{ alignItems: "center", display: "inline-flex", marginTop: 0 }}
      >
        <img
          style={{ height: "68px", marginRight: "-15px" }}
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
      </header>

      <div className="input-search">
        <input
          style={{ border: "none" }}
          type="text"
          className="search-input"
          placeholder="  🔍   Search"
          onChange={handleChange}
        ></input>
      </div>

      <div   style={{ alignItems: "center", display: "inline-flex", marginTop: 0 }}
      >
        <Link to={"/cart"}>
          <img src={carticon}></img>
        </Link>

        <Link to="/account">
          <img src={headerusericon}></img>
        </Link>

        <text style={{ color: "white" }}>{decodedData?.FullName}</text>
        <div className="header-userdp">
          <div className="back">
            <img
              className="rotate-dp-img"
              src="https://i.postimg.cc/nhG8H3X6/copywriting.jpg"
            ></img>
          </div>
          <div className="front">
            <img className="rotate-dp-img" src={decodedData?.avatar} />
          </div>
        </div>
      </div>
    </div>
  );
}
