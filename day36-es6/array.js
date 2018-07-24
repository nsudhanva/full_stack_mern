let fruits = ['mango', 'banana','apple','chikku'];

let fruit1 = fruits[0];
let fruit2 = fruits[1];

console.log(fruit1,fruit2);

//es6
[ f1, f2, f3 ] = fruits;

console.log(f1, f2, f3);
//use case - where a function is returning an array,we want to assign it to seperate variables
function oddEven(numbers){
    let result = [[], []];
    numbers.forEach(function(number){
        if(number % 2 == 0){
            result[0].push(number);
        }
        else{
            result[1].push(number);
        }
    });
    return result;
}

function findSum(numbers){
    return numbers.reduce(function(acc, num){
        return acc += num;
    });
}

let [evens, odds] = oddEven([10, 15, 20, 25]);
console.log(evens);
console.log('sum of evens is', findSum(evens));

console.log(odds);
console.log('sum of odds is', findSum(odds));