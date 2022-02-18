import { React, useState, useEffect } from "react";
import CatApi from "./Catapi";

const CatArray =  () =>{
    const [catsArray, setCatArray] = useState(CatApi());
    
//     const CollectCats = async () => {
//     const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=12&page=1&order=Desc");
//     const catImages = await response.json();
//     console.log(catImages)
//     setCatArray(catImages)
//     }

//     useEffect(()=>{
//     CollectCats()
// }, [])


    if (!catsArray){
        return <h4>loading</h4>
    }
    const ArrayOfCats = () =>{
       return catsArray.map((images) =>{
            return (    
                <div className="cat-div">
                    <div id="cat-img-div">
                        <img src={images.url}/>
                    </div> 
                    <div id="cat-price-div">
                        <p>Cat Price here</p>
                        
                    </div>
                    <div>
                        <button>Add to basket</button>
                    </div>
                </div>
                )})
    }
    


    return <ArrayOfCats />
}


export default CatArray;


