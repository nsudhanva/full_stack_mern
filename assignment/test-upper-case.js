// Write a JavaScript function to test whether the character at the provided (character) index is upper case. 
// Test Data :
// console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
// false

function isUpperCaseAt(str,index){
    var char = str.charAt(index);
    console.log(char);
    console.log(char.toUpperCase());
    if((char) === (char.toUpperCase())){
        return true;
    }
    else{        
        return false;
    }
}

console.log(isUpperCaseAt('Js STRING EXERCISES', 3));