'use strict';


function makeTransaction(quantity, pricePerDroid) {
    const quantity = 5;
    const pricePerDroid = 3000;
    const totalPrice = quantity * pricePerDroid; 
    const greeting = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
console.log(makeTransaction(5, 3000));

