import React, {useState} from "react";
import "../App.css";
import Basket from "./Basket";
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
            <div id="div-header">
     
                <div id="div-header-logo">
                    <h1>Logo/Title</h1>
                </div>
                <div id="div-header-spacer"><h2>Empty Space</h2></div>
                <div id="div-header-basket"><button onClick={toggleBasket}>Basket</button></div> {/*Feel free to change button to whatever*/}

            </div>

            <div id="div-navbar"><h3>Nav bar</h3></div>

            <div id="div-maincontent">
                {showBasket ? <Basket/> : null}
            </div>
                
        </div>
    )

}


export default Body