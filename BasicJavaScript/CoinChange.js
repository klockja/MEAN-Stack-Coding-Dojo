// Coin Change
// Objectives:

//     Write a function that creates and returns an object.

// Given a number of US cents, return the optimal configuration (meaning the largest denominations possible) of coins in an object. Use dollars, quarters, dimes, nickels, and pennies.

// Example: coinChange(312) returns 

// {dollars: 3, dimes: 1, pennies: 2}

// Example: coinChange(78) returns 

// {quarters: 3, pennies: 3}

// BONUS: Given an object with certain amounts of denominations of US money, alter the object so that the configuration is optimal.

// Example: coinChange({dollars: 2, dimes: 15, pennies: 5}) returns

function coinChange(cents)
{
    var dollars = 0, dimes = 0, nickels = 0, pennies = 0;
    if(cents % 100)
        dollars = parseInt(cents / 100);
    cents -= (dollars * 100)
    if(cents % 10)
        dimes = parseInt(cents / 10);
    cents -= (dimes * 10)
    if(cents % 5 == 0)
        nickels = parseInt(cents / 5);
    cents -= (nickels * 5);
    pennies = cents;
    
    return "Dollars: " + dollars + ", dimes: " + dimes + ", nickels: " + nickels + ", pennies: " + pennies;
}

console.log(coinChange(312));
console.log(coinChange(565));