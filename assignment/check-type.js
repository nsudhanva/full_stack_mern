function clearArray(a){
    var result = [];
    a.forEach(function(value){
        if(value){
            result.push(value);  
        }
        
    });
    return result;
}

console.log(clearArray([NaN, 0, 15, false, -22,undefined, 47, null]));