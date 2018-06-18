function findEvenCounts(numbers) {
    var count = 0;
    for(var i = 0;i < numbers.length;i++) {
        if(numbers[i] % 2 == 0) {
            count++;
        }
    }
    return count;
}

function findEvens(numbers)  {
    var evens = [];
    for(var j = 0;j < numbers.length;j++){
        if(numbers[j] % 2 == 0){
            evens.push(numbers[j]);
        }
    }
    return evens;

}

var numbers = [10,15,20,25,30,35];
console.log(findEvenCounts(numbers));
console.log(findEvens(numbers));

function isElementPresent(numbers,ele) {
    if(numbers.includes[ele]) {
        return true;
    }
    else {
        return false;
    }
} 
var ele = 5;
console.log(isElementPresent(numbers,ele));

