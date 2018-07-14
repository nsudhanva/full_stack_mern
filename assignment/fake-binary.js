// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// TEST Case

// 1. fakeBinary('3457') returns '0011'

// 2. fakeBinary('1234') returns '0000'

function fakeBinary(a){
    var result = '';
    var arr = a.split('');
    for(var i = 0;i < arr.length;i++){
        if(arr[i] < 5){
            result = result + '0';
        }
        else{
            result = result + '1';
        }
    }
    return result;
};
console.log(fakeBinary('3457'));