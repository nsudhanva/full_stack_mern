// Create the function reverseString that reverses a string, and returns the value of the reversed string.

// NOTE: Do not use the built-in Array .reverse() method!

// Examples:

// INPUT: reverseString("hello");
// OUTPUT: 'olleh'
// INPUT: reverseString('Greetings from the moon!');
// OUTPUT: '!noom eht morf sgniteerG'

function reverseString(a){
    var reverse = "";
    for(i = a.length-1; i >= 0;i--){
        reverse = reverse + a[i];
    }
    return reverse;
}

console.log(reverseString('hello'));