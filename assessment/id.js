function findProduct(a,b){
    if(b > a.length){
        return `no`
    }
 var result = find(function(value){
    return value.id == b;
 });
}