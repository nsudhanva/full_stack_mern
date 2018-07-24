var fruits = ['mango', 'apple', 'ananus', 'banana'];

//es5
fruits.forEach(function(fruit){
    console.log(fruit);
})

//es6
fruits.forEach((fruit) => {
    console.log(fruit);
});

//incase of only one argument to function eliminate round brackets
fruits.forEach(fruit => {
    console.log(fruit);
})

//incase of only one statement to be executed inside the function, eliminate the flower brackets

fruits.forEach(fruit => console.log(fruit));

let numbers = [10, 20 ,30, 40, 50];

let result = numbers.filter(n => n > 25);
console.log(result);

//arrow function will ALWAYS be anonymous function, hence we use function epression

//function declaration canot be used as arrow function

function add(){

}

//function expression can be converted to arrow functions
var add  = () => {
    
}