function chopString(a,b){
    let result = [];
    let len = a.length;
    for(let i = 0;i < len;i++){
    result.push(a.slice(0,b)); 
    console.log(result);
    a = a.slice(b);     
    console.log(a);  
    if(a.length == 0){
        break;
    }
    }
    return result;
}
console.log(chopString('resource',3));