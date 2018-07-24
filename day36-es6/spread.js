console.log(Math.max(10, 30));

let numbers = [15, 25, 5, 10];
console.log(Math.max(numbers));
console.log(Math.max(15, 25, 5, 10));

console.log(numbers);

//spread
console.log(...numbers);
console.log(Math.max(...numbers));


function someValues(val){
    console.log(arguments);
    console.log(val);
}

let values = ['city', 'name','address'];
someValues(...values);
console.log(...values);
