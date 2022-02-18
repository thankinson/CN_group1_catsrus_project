
import React from "react";
import "../App.css";
import catbanner from './images/catbanner.png'
import cattail from './images/cattail.png'
import Basket from "./Basket";
import CatCost from "./Catcost"
// import AddToBasket from "./addtobasket";
// import Basket from "./basket";
// import CatApi from "./CatApi";
// import CatCost from "./catcost";
// import Navbar from "./navbar";




const Body = () => {
    const [showBasket, updateShowBasket] = useState(true);
    const toggleBasket = () =>{
        updateShowBasket(!showBasket);
    }
    
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
                    <a href="#" onClick={toggleBasket}>BASKET</a>
            </div>
            </div>

            <div id="cat-banner">
                <h2>Our furry frinds need a new loving home!</h2>
                <img src={catbanner} alt="cat-banner"/>
                </div>

            <div id="maincontent">
                {/* <CatArray /> */}
            </div>


            <div id="cat-tail">
                <img src={cattail} alt="cat-banner" id="tail"/>
                </div>


            <div id="div-maincontent">
                {showBasket ? <Basket/> : null}
            </div>
                
        </div>

    )

}

export default Body