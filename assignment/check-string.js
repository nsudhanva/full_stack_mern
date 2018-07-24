var isString  = (str) => {
    if(typeof str == 'string'){
    return true;        
    }
    else{
        return false;
    }
}

console.log(isString([1,2,4,0]));