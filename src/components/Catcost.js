const catCost = (basketItems) => {
    let sum = 0;
    for (let i = 0; i < basketItems.length ; i++) { 
        sum += basketItems[i].price;
    }
    return sum
}

export default catCost;