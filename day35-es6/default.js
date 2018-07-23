//setting default parameters vlaues to functions
//<= es5-2014

//console.log((n1>n2) ? 'n1 is greater' : 'n2 is greater'

function add(n1, n2){
    var n1 = (typeof n1 !== 'undefined') ? n1 : 0;
    var n2 = (typeof n2 !== 'undefined') ? n2 : 0;
    return n1 + n2;
}
console.log(add(10, 20));
console.log(add());

//es6

function sum(n1 = 0, n2 = 0){
    return n1 + n2;
}

console.log(sum(10, 20)); //30
console.log(sum()); // 0
console.log(sum(15)); //15