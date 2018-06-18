// Write a JavaScript function to get a random item from an array.

// Test Input: 

// 1. randomElement([10,20,30,40]);

// 2. randomElement(['a','b','c']);

// Output 

// 1. should return some random element from array 

// 2. should return some random element from array 
function randomElement(a){
    var index = Math.round((Math.random() % a.length)) + 1;
    return a[index];
}
console.log(randomElement([10,20,30,40]));