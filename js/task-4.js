'use strict';
function getShippingCost(country, price) {
    let msg;
    switch (country) {
        case `China`: 
            msg = `Shipping to ${country} will cost ${price} credits`;
            break;
        case `Chile`:
            msg = `Shipping to ${country} will cost ${price} credits`;
            break;
        case `Australia`:
            msg = `Shipping to ${country} will cost ${price} credits`;
            break;
        case `Jamaica`:
            msg = `Shipping to ${country} will cost ${price} credits`;
            break;
        default:
            msg = `Sorry, there is no delivery to your country`;
            break;
    }
    return msg;
}
console.log(getShippingCost("Australia", 170)); 
console.log(getShippingCost("Germany")); 
console.log(getShippingCost("China", 100)); 
console.log(getShippingCost("Chile", 250)); 
console.log(getShippingCost("Jamaica", 120)); 
console.log(getShippingCost("Sweden")); 