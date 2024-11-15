import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Commponants/CommonComponents/Header/Header";
import Login from "./Commponants/Login/Login";
import Sidenav from "./Commponants/CommonComponents/Sidenav/Sidenav";
import StockZipoffer from "./Commponants/StockZipoffer/StockZipoffer";
import Account from "./Commponants/Account/Account";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Uchat from "./Commponants/Chat/Uchat";
import Home from "./Commponants/Home/Home";
import Cart from "./Commponants/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Login /> */}
        <div>
          <div className="app-container">
          <div className="header-container">
                <Header />
              </div>   
            </div>
            <div className="main-container">
             <div className="sidenav-container1">
              <Sidenav />     
              </div>
              <div className="content-container">
                <Routes>
                  <Route index element={<Home/>}></Route>
                  <Route path="/account" element={<Account />}></Route>
                  <Route path="/cart" element={<Cart/>}/>
                </Routes>
              </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
