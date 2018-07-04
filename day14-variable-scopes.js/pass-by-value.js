//whenever we pass datatype as an argument to function



var number = 10;
var name = 'Shree';
var isTrue = true;

function setNumber(number){
    number = 100;
    console.log(number);
}

function setName(name){
    name = 'Shreedhar';
    console.log(name);
}

function setBoolean(isTrue){
    isTrue  = false;
    console.log(isTrue);
}

setNumber(number);
console.log(number);

setName(name);
console.log(name);

setBoolean(isTrue);
console.log(isTrue);