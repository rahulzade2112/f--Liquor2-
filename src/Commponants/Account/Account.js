import React, { useState, useEffect } from "react";
import { Box, Button, Icon, TextField } from "@mui/material";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
import "./account.css";
import Change from "./Change Password/Change";
import MyOrders from "./My Orders/MyOrders";
import EditAvatar from "./Edit Avatar/EditAvatar";
import Address from "./Address/Address";
import Favourite from "./Save Products/Favourite";
import Gifts from './Sent Gifts/Gifts';
import Post from "./Post/Post";
import Logout from './Logout/Logout';
import ACbgimg from "../../assets/ACbg.jpg";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import profileIcon from "../../assets/Accountassets/profile.svg";
import locationIcon from "../../assets/Accountassets/adrslocationicon.svg";
import myordersIcon from "../../assets/Accountassets/myorder.svg";
import editavatar from "../../assets/Accountassets/editavatar.svg";
import saveproIcon from "../../assets/Accountassets/savepro.svg";
import giftIcon from "../../assets/Accountassets/giftIcon.svg";
import posticon from "../../assets/Accountassets/posticon.svg";
import changepassIcon from "../../assets/Accountassets/changepassicon.svg"
import logoutIcon from "../../assets/Accountassets/logouticon.svg";
import Myprofile from "./My profile/Myprofile";
import { isExpired, decodeToken } from "react-jwt";

export default function Account() {
  const [dateState, setDateState] = useState(new Date());

  // useEffect(() => {
  //   setInterval(() => setDateState(new Date()), 30000);
  // }, []);
  
  const [currentTime, setCurrentTime] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const [value, setValue] = React.useState(0);
  var [decodedData, setFullData] = useState();
  useEffect(() => {
    var token = localStorage.getItem("token");
    setFullData(decodeToken(token));
    //  setTime(new Date());
 
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
        
    {decodedData != null && (      
         <Tab.Container className="m-0" defaultActiveKey="first">
          <Row className="w-100 h-100 flex-nowrap" >
               <Col 
            style={{  padding: "0",position:"relative",
              width: "14.4%", marginLeft: 0, justifyContent: "center", borderRadius: "8px", display: "flex"
            }}
            sm={3}
          >          
            <Nav className="flex">
              <Nav.Item className="Ac-Nav-container">   
           
                 <span  className="rounded-2 dec-0 rounded-bottom-2"style={{ height: "70px", background: "red", color: "#ffffff", padding: "3px", gap: "18px" }}>
                  <img style={{ paddingLeft: "10px", height: "65px", margin: "0", borderRadius: "50%", }} src='https://bit.ly/dan-abramov' alt='Dan Abramov'></img>
                  {/* {time.toLocaleTimeString()} */}
                  {console.log()}
                </span>

              <Nav.Link className="Ac-nav-content" eventKey="first" style={{ color: "white", paddingLeft:"auto" }} >
                <img className="Ac-nav-icon" style={{marginLeft:"auto",marginRight:"auto"}} src={profileIcon}></img>
              <em style={{paddingLeft:"40px"}}> My Profile </em>
                </Nav.Link> 
 
                <Nav.Link className="Ac-nav-content"eventKey="second">
              <img className="Ac-nav-icon" style={{marginLeft:"auto",marginRight:"auto"}} src={editavatar}></img>
              <em style={{paddingLeft:"40px"}}> Aavatar </em>
                </Nav.Link>

                <Nav.Link className="Ac-nav-content"eventKey="third">
              <img className="Ac-nav-icon" src={locationIcon}></img>
              <em style={{paddingLeft:"40px"}}> Address </em>
                </Nav.Link>
                
                <Nav.Link className="Ac-nav-content" eventKey="fourth">
               <img className="Ac-nav-icon" src={myordersIcon}></img>
               <em style={{paddingLeft:"40px"}}>My Orders </em> 
                </Nav.Link>
                
                <Nav.Link className="Ac-nav-content" eventKey="fifth">
               <img className="Ac-nav-icon" src={saveproIcon}></img>
               <em style={{paddingLeft:"40px"}}>Save</em>
                </Nav.Link>
                
                <Nav.Link className="Ac-nav-content" eventKey="sixth">
               <img className="Ac-nav-icon" src={giftIcon}></img>
               <em style={{paddingLeft:"40px"}}>Sent Gifts </em>
                </Nav.Link>

                <Nav.Link className="Ac-nav-content" eventKey="saven">
               <img className="Ac-nav-icon" src={posticon}></img>
               <em style={{paddingLeft:"40px"}}>Post </em>
                </Nav.Link>

                <Nav.Link className="Ac-nav-content" eventKey="eighth">
               <img className="Ac-nav-icon" src={changepassIcon}></img>
               <em style={{paddingLeft:"40px"}}>Password </em>
                </Nav.Link>
                
                <Nav.Link   style={{ paddingTop:"20%",}} eventKey="ninth">
               <img className="Ac-nav-icon"  src={logoutIcon}></img>
               <em style={{paddingLeft:"40px"}}>Log Out </em> 
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>    
       
         <em style={{ position: "absolute", justifyContent: "right", textAlign: "center", fontSize: "x-large", textShadow: "0 0 3px #FF0000" }}>    Good Evening! Rahul</em>
            
          <Col 
          style={{ color: "black",display: "flex", height: "71ch", width: "80%",
           justifyContent: "center",marginLeft:"auto",marginRight:"auto",marginTop:"4%", 
           borderRadius: "8px", backgroundColor: "#ffffff"
            }} sm={9} >

            <Tab.Content style={{ padding: "28px" }} >
               {/* <Tab.Pane eventKey="first">{<Edit />}</Tab.Pane> */ }
             <Tab.Pane value={value} eventKey="first">{<Myprofile state={decodedData}  />}</Tab.Pane>
              <Tab.Pane eventKey="second">{<EditAvatar />}</Tab.Pane>
              <Tab.Pane eventKey="third">{<Address />}</Tab.Pane>
              <Tab.Pane eventKey="fourth">{<MyOrders />}</Tab.Pane>
              <Tab.Pane eventKey="fifth">{<Favourite />}</Tab.Pane>
              <Tab.Pane eventKey="sixth">{<Gifts />}</Tab.Pane>
              <Tab.Pane eventKey="saven">{<Post />}</Tab.Pane>
              <Tab.Pane eventKey="eighth">{<Change />}</Tab.Pane>
              <Tab.Pane eventKey="ninth">{<Logout />}</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
)}
    </div>
  
  );
}
