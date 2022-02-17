import React from "react";
import "../App.css";
// import AddToBasket from "./addtobasket";
// import Basket from "./basket";
// import CatApi from "./CatApi";
// import CatCost from "./catcost";
// import Navbar from "./navbar";

const Body = () => {

    return (
        <div id="div-container">
            <div id="div-header">
     
                <div id="div-header-logo">
                    <h1>Logo/Title</h1>
                </div>
                <div id="div-header-spacer"><h2>Empty Space</h2></div>
                <div id="div-header-basket"><h1>Basket</h1></div>

            </div>

            <div id="div-navbar"><h3>Nav bar</h3></div>
            
            <div id="div-maincontent"></div>

        </div>
    )

}


export default Body