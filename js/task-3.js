'use strict';
let sms;
function checkForSpam(message) {
message = message.toLowerCase();
const spamMsg = "spam".toLowerCase();
const saleMsg = "sale".toLowerCase();
    if (message.includes(spamMsg)) {
        sms = true;
    } else  if (message.includes(saleMsg)) {
        sms = true;
    } else {
        sms = false;
    }
    return sms;
}
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter")); 
console.log(checkForSpam("Get best sale offers now!")); 
console.log(checkForSpam("Amazing SalE, only tonight!")); 
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?")); 