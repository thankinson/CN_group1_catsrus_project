import React from "react";
import "../App.css";
import catbanner from './images/catbanner.png'
import cattail from './images/cattail.png'
// import AddToBasket from "./addtobasket";
// import Basket from "./basket";
// import CatApi from "./CatApi";
// import CatCost from "./catcost";
// import Navbar from "./navbar";


const Body = () => {

    return (
        <div id="div-container">
            <div id="header">
     
                <div id="header-logo">
                    <h1>Cats R Us</h1>
                </div>
                <div id="navbar">
                    <a href="#">HOME</a>
                    <a href="#">ABOUT US</a>
                    <a href="#">HAVE A QUESTION?</a>
                    <a href="#">BASKET</a>
            </div>
            </div>

            <div id="cat-banner">
                <h2>Our furry frinds need a new loving home!</h2>
                <img src={catbanner} alt="cat-banner"/>
                </div>

            <div id="maincontent">
            </div>

            <div id="cat-tail">
                <img src={cattail} alt="cat-banner" id="tail"/>
                </div>

        </div>

    )

}

export default Body