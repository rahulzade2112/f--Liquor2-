import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
// import Header from '../Header/Header'
import currentPic from "../../assets/Headerassets/testheader1.jpeg"
export default function Home() {
  // var [users, setUser] = useState([]);

  // useEffect(() => {
  //   axios.get("https://reqres.in/api/users").then((res) => {
  //     console.log(res.data.data);
  //     setUser(res.data.data);
  //   });
  // }, []);

  return (
    <div>
      <div className="main-container">
        {/* <Header/> */}
        <div className="testheader">
          {/* <img src={user[0].avatar}></img> */}

          <img className="header-carousel" src={currentPic}></img>
        </div>
      </div>
    </div>
  );
}
