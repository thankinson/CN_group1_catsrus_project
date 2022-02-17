// add and remove items
import React, {useState} from "react";

const Basket = () => {


    const [basketItems, setBasketItems] = useState([
        {
            price: 100,
            description: "test description",
            name: "harry",
            img: "url_1"
        },
        {
            price: 250,
            description: "am cat hi",
            name: "tabby",
            img: "url_2"
        }
    ]);
    
    const calculateTotal = () => {
        // PETER'S CODE
        return 0;
    };

    const removeItem = (index) => {
        // TERRY'S CODE
    };

    return (
        <div id="basket_ui">
            <p>Basket</p>
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


export default Basket