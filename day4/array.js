//An array is an ordered,integer indexed collection of objects
var player1 = 'Sehwag';
var player2 = 'Sachin';
var player3 = 'Ganguly';
var player4 = 'Dravid';

//object

var player = {

}

//array
var players = [];

console.log(players);
console.log(typeof players); //'object'
console.log(typeof player)//'object'
console.log(Array.isArray(players))//true
console.log(Array.isArray(player));//false

var dream11 = ['steve','root','williamson','rashid'];
console.log(dream11);

console.log(dream11[0]);//'steve'
console.log(dream11[1]);//'root'
console.log(dream11[2].toUpperCase());//'WILLIAMSON'

console.log(dream11[10]);//undefined
console.log(dream11);
dream11[4] = 'Kumble';
console.log(dream11);

console.log(dream11.push('cook'));
console.log(dream11);

//last index will always be length-1
console.log('total players', dream11.length);

dream11[dream11.length] = 'dhawan';
console.log(dream11);

var numbers = [10, 20, 30];
console.log(numbers.reverse());

console.log(dream11.sort());
console.log(dream11);

var names = new Array();//names = []
console.log(names);

var names = new Array(2);
console.log(names);//sparse array
console.log(names[0]);//undefined
console.log(names[1]);//undefined

var names = new Array(2,'Anonymous');
console.log(names);//[2,'anonymous'];

var numbers = new Array(10);
console.log(numbers);
numbers.fill(10);
console.log(numbers);


console.log(dream11);
//pop is used to remoe the element from the end of array
console.log(dream11.pop());
console.log(dream11);

//push is used to add an element to the end of array
console.log(dream11.push('rohit'));
console.log(dream11);

//shift is used to remove the element from the beginning of array
console.log(dream11.shift());
console.log(dream11);

//unshift is used to add an element to the beginnig of array
console.log(dream11.unshift('chahal'));
console.log(dream11);

//splice is used to add/remove an element in array.Splice with 3 arguments is used to add to array,2 arguments is used to remove
dream11.splice(1,0,'raina');
console.log(dream11);
dream11.splice(2,2);
console.log(dream11);


