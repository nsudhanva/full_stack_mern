// Create a function, removeZeros, which strips out any zeros from a number, and returns the 'stripped' number.

// So, what happens if the input is zero? That is a special case! If the input is zero, the function should return NaN, which stands for 'Not a Number'. NaN is a special value that isn't a number, but still is of type 'number'!

// Examples

// INPUT: removeZeros(1023002);
// OUTPUT: 1232
// INPUT: removeZeros(6006606.203);
// OUTPUT: 6666.23
// INPUT: removeZeros(0);
// OUTPUT: NaN
function removeZeros(number){
    var string =  number.toString();
	var temp = [];
    temp = string.split('');
	var result = '';
    for(var i= 0;i < temp.length;i++){
        if(temp[i] != 0){
            result = result + temp[i];
        }
    }
    var finalResult = parseFloat(result);
	return finalResult;
}

console.log(removeZeros(6006606.203));