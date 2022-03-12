///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.map(money => money.price + 0).reduce((acc, curr) => acc + curr);
console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
calcFinialPrice = (cartTotal, couponValue, tax) =>{
    return cartTotal * (1 + tax) - couponValue;
}
console.log(calcFinialPrice(26.97, 10, .06));


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    name - [string] for keeping track of who this is.
    fav food to buy - [string] this will help us know what to keep better stock of and which to keep a lower stock of so we dont have to over spend on food
    avg spend - [int] learn what they will spend on avg so we can adjust prices to keep them coming
    quantity bought - [int] understand what is being bought so we can restock at the right times.
    how often to come back per week [int] to see what we need to change so we can keep them coming back.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = {
    name : "kyle",
    favFood : "pizza",
    avgSpend : 25,
    quantityOfFood: 4,
    comebackPerWeek: 3 
};
