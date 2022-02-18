// call api
import { React, useState, useEffect } from "react";

const faker = require('faker');

const CatApi = () => {
    const [CatApi, setCatApi] = useState("");
    const [errorLog, setErrorLog] = useState({
        error: false, 
        message: "Cannot load image"
    })
    const CollectCats = async () => {
        try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10&page=10&order=Desc")
        console.log(response)
        
        const data = await response.json()
        setCatApi(data)
        } catch(errorLog){
            setErrorLog({error: true, message: errorLog.message})
        }
    } 
    useEffect(() => {
        CollectCats()
    }, [])
}

// const catDescription = {
//    name = faker.name.firstName(),
//    breed = faker.animal.cat(),
//    music = faker.music.genre(),
//    toy = faker.commerce.product(),
//    car = faker.vehicle.manufacturer(),
//    price = faker.commerce.price(50, 500, '£'),

// };
//     return(
//         `Name: ${name}, 
//         Breed: ${breed},
//         Favourite type of music: ${music}, 
//         Favourite toy: ${toy},
//         Favourite car: ${car},
//         Price: ${price}
//         `)

// this faker data needs to be fetched somehow according to Leon


export default CatApi
// export default catDescription 