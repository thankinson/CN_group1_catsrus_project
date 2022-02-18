import React, {useState, useEffect} from "react";
import "../App.css";
import catbanner from './images/catbanner.png'
import cattail from './images/cattail.png'
import catCost from "./Catcost.js";
const { faker } = require('@faker-js/faker');


const Body = () => {
    const [showBasket, updateShowBasket] = useState(false);
    const [catsArray, setCatArray] = useState();
    const [basketItems, setBasketItems] = useState([]);

    const toggleBasket = () =>{
        updateShowBasket(!showBasket);
    }

    const catApi = async () => {

        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10&page=10&order=Desc")
            const data = await response.json()

            let outputArray = [];
            data.forEach(obj => {
                outputArray.push({
                    price: parseInt(faker.commerce.price(50, 500)),
                    name: faker.name.firstName(),
                    img: obj.url
                });
            });

            //console.log(outputArray);

            setCatArray(outputArray);
        } catch(errorLog){
            alert(errorLog.message);
        }
    }

    useEffect(() => {
        catApi();
    }, [])

    const calculateTotal = () => {
        // PETER'S CODE
        let total = catCost(basketItems)
        return total;
    };
       // TERRY'S CODE
    const removeItem = (index) => {
        let copy = [...basketItems]
        copy.splice(index,1)
        setBasketItems(copy)
    };

    const addItemToBasket = (item) =>{
        let copy = [...basketItems];
        copy.push(item);
        setBasketItems(copy);
    };

    const Basket = () => {
        return (
            <div id="basket_ui">
                <div id="basket_ui_label"><p>Basket</p><button className="basket_ui_right" onClick={toggleBasket}>Close Basket</button></div>
                <div id="basket_ui_list">
                    {basketItems.map((catObject, index) => {
                        return (
                            <div className="basket_ui_entry">
                                <p className="basket_ui_left">{catObject.name}</p>
                                <p>£{catObject.price}</p>
                                <button onClick={() => removeItem(index)} className="basket_ui_right">Remove</button>
                            </div>
                        );
                    })}
                </div>
                <p>Price: £{calculateTotal()}</p>
            </div>
        );
    }


    return (
        <div id="div-container">

            <div id="header">
     
                <div id="header-logo">
                    <h1>Cats R Us</h1>
                </div>
                <div id="navbar">
                    <h2 >HOME</h2>
                    <h2 >ABOUT US</h2>
                    <h2 >HAVE A QUESTION?</h2>
                    <h2 onClick={() => toggleBasket()}>BASKET</h2>
            </div>
            </div>

            <div id="cat-banner">
                <h2>Our furry friends need a new loving home!</h2>
                <img src={catbanner} alt="cat-banner"/>
                </div>

            <div id="maincontent">
                {showBasket ? <div id="basket_container"><Basket/></div> : null}
                {showBasket ? null : 
                    catsArray != null ? 
                    catsArray.map((catObj) =>{
                        return (    
                            <div className="cat-div">
                                <div id="cat-img-div">
                                    <img src={catObj.img}/>
                                </div> 
                                <div id="cat-price-div">
                                    <p>{catObj.name} - £{catObj.price}</p>
                                </div>
                                <div>
                                    <button onClick={() => addItemToBasket(catObj)}>Add to basket</button>
                                </div>
                            </div>
                        )
                    }) : <h4>loading</h4>
                }
            </div>


            <div id="cat-tail">
                <img src={cattail} alt="cat-banner" id="tail"/>
            </div>  
        </div>

    )



}





export default Body