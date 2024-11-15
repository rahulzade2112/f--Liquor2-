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
import { decodeToken } from "react-jwt";
import { useEffect, useState } from "react";
// import Sprits from "./Commponants/Products List/SPIRITS/Sprits";
import Champagne from "./Commponants/ProductsList/CHAMPAGNE/Champagne";
// import Wine from "./Commponants/Products List/WINE/Wine";
// import OnSale from './Commponants/Products List/ONSALE/OnSale';
// import Mixerfrutes from './Commponants/Products List/MIXERS & FRUIT/Mixerfrutes';
import Feedback from "./Commponants/FeedBack/Feedback";
import { searchContext } from "./Context/searchContext";
// import Menu from "./Commponants/Menu/menu";
import Productslist from "./Commponants/ProductsList/Productslist";
import Products from "./Products/Products";
import SingleProduct from "./SingleProduct/SingleProduct";

function App() {
  const [token, setToken] = useState();
  const [search , updateSearch]=useState("")

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    // setData(decodeToken(localStorage.getItem("token")))
  }, []);
  return (
    <searchContext.Provider value={{searchVariable: search ,updateSearchVariable:updateSearch }}>

    <BrowserRouter>
      {token == null && <Login state={setToken} />}
      {token != null && (
        <div>
          <div  className="app-container">
            <div className="header-container">
              
             <Header />
             </div>
            
          </div>
          <div className="main-container">
            <div className="sidenav-container1">
              <Sidenav />
            </div>
            <div><Feedback/>
              </div>
            <div className="content-container">
              <Routes>
                <Route index element={<Home />}></Route>
                 <Route path="/account" element={<Account/>}></Route>
                <Route path="/SPIRITS" element={<Productslist/>} /> 
                <Route path='/products' element={<Products/>}></Route>
               <Route path='/singleproduct' element={<SingleProduct/>}></Route>
               <Route path="/champange" element={<Champagne/>}/> 

               {/* <Route path="/cart" element={<Cart/>}/> */}
                {/*  <Route path="" element={<Mixerfrutes/>}/>
                <Route path="" element={<Wine/>}/>
                <Route path="" element={<OnSale/>}/>
              <Route path="" element={<Menu/>}/> */}
                 {/*  <Route path="" element={}/>
                <Route path="" element={}/> */}
              </Routes>
            </div>
          </div>
        </div>
      )}
    </BrowserRouter>
    </searchContext.Provider>
  );
}

export default App;
