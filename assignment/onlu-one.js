// Write a function that accepts three arguments and returns true if only one of those arguments is truthy, and false if not.

// Examples:

// INPUT: onlyOne(false, false, true)
// OUTPUT: true
// INPUT: onlyOne(0, 1, 2)
// OUTPUT: false

function onlyOne(a,b,c){
    if(a == true && b == false && c == false){
        return true;
    }
    else if(a == false && b == true && c == false ){
        return true;
    }
    else if(a == false && b == false && c == true){
        return true;
    }
    else{
        return false;
    }
}


console.log(onlyOne(0,1,2));