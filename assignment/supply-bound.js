// Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.

// Test Data : 
// 1. numStringrange('a', "z", 2);
//     return ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

function numStringrange(a,b,c){
    charArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var result = [];
    if(isNaN(a) && isNaN(b)){
            for(var i = 0;i < charArray.length;i = i + c){
                result.push(charArray[i]);
                if(c > charArray.indexOf(b)){
                    break;
                }
            }
        return result;
    }
    else{
        numArray = ['0','1','2','3','4','5','6','7','8','9'];
        for(var i = 0;i < numArray.length;i = i + c){
            result.push(numArray[i]);
            if(c > numArray.indexOf(b)){
                break;
            }
        }
        return result;
    }
}
console.log(numStringrange('1','5',2));