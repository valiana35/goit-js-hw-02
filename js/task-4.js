'use strict';
let msg;
function getShippingCost(country) {
    switch (country) {
        case "China":
            msg = "Shipping to China will cost 100 credits";
            break;
        case "Chile":
            msg = "Shipping to Chile will cost 250 credits";
            break;
        case "Australia":
            msg = "Shipping to Australia will cost 170 credits";
            break;
        case "Jamaica":
            msg = "Shipping to Jamaica will cost 120 credits";
            break;
        default:
            msg = "Sorry, there is no delivery to your country";
    }
    return msg;
}
console.log(getShippingCost("Australia")); 
console.log(getShippingCost("Germany")); 
console.log(getShippingCost("China")); 
console.log(getShippingCost("Chile")); 
console.log(getShippingCost("Jamaica")); 
console.log(getShippingCost("Sweden")); 