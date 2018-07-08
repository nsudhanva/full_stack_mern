// Create a function sumMultiplyAndRoundthat takes 3 numbers, and calculates a return value based on the following rules.

// The function should sum the first two numbers passed in, and then round them down to the nearest integer. The rounded sum should then be multiplied by the third argument, rounded up and returned.

// Examples:

// INPUT: sumMultiplyAndRound(2, 3.5, 6.2)
// OUTPUT: 37

function sumMultiplyAndRound(a, b ,c){
    var sum = a + b;
    console.log(sum);
    var sumRound = Math.ceil(sum);
    console.log(sumRound);
    var prod = sumRound * c;
    console.log(prod);
    var prodRound = Math.floor(prod);
    console.log(prodRound);
    return prodRound;
};
console.log(sumMultiplyAndRound(2, 3.5, 6.2));