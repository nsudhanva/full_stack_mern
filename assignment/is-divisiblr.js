// Write a function isDivisible that accepts two numbers and returns true if the first number is cleanly divisible by the second, and false if not.

// Examples:

// INPUT: isDivisible(9, 3);
// OUTPUT: true
// INPUT:isDivisible(9, 4);
// OUTPUT:false
function isDivisible(a,b){
    if(a % b == 0){
        return true;
    }
    else{
        return false;
    }
}