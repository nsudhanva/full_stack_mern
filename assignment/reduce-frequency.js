// Write a function that will use the .reduce()method to find the frequency of strings in an array. Your function, strFrequency, takes an array of strings, some strings occurring multiple times, and returns an object that specifies how many times each string occurred in the array.

// Examples

 var names = ["Bob", "Bill", "Bo", "Ben", "Bob", "Brett", "Ben", "Bill", "Bo", "Ben", "Bob", "Ben"];
// INPUT: strFrequency(names);
// OUTPUT: {Bob: 3, Bill: 2, Bo: 2, Ben: 4, Brett: 1}

function strFrequency(array){
    var reduced = array.reduce(function(name,frequency){
            return [name,frequency];
    })
}
console.log(strFrequency(names));