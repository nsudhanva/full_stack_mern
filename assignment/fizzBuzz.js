// Write the function fizzBuzz, a modified version of the classic programming problem.

// The function takes a number for its input.

// If the number is divisible by 3, it should return 'Fizz'.
// If the number is divisible by 5, it should return 'Buzz' and if the number is divisible by 15, return 'FizzBuzz'.
// If the number isn't divisible by 5, 3, or 15, return an empty string.
// Examples:

// INPUT: fizzBuzz(6)
// OUTPUT: 'Fizz'
// INPUT: fizzBuzz(10)
// OUTPUT: 'Buzz'
// INPUT: fizzBuzz(15)
// OUTPUT: 'FizzBuzz'
// INPUT: fizzBuzz(7)
// OUTPUT: ''

function fizzBuzz(a){
    if((a % 3) === 0 && (a % 15 != 0)){
        return 'Fizz';
    }
       if((a % 5  === 0) && (a % 15 != 0)){
           return 'Buzz';
       }
       if((a % 15 === 0)){
           return 'FizzBuzz';
       }
       if((a % 3 != 0) && (a % 5 != 0) && (a % 15 != 0)){
           return '';
       }
   }

console.log(fizzBuzz(6));
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));
console.log(fizzBuzz(7));

