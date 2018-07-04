var n1 = 10;
var n2 = 20;

function add(){
    //here we are able to assign new values to our global variables directly
    n1 = 100;
    n2 = 200;
    return n1 + n2;
}

console.log(add());//300
console.log(n1);//100
console.log(n2)//200
console.log('..........');
var a1 = 15;
var a2 = 25;
function sum(){
    var a1 = 150;
    var a2 = 250;
    console.log(a1);
    return a1 +  a2;
   
}

console.log(sum());//400
console.log(a1);//15
console.log(a2);//25