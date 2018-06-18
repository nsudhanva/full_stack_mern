var firstName = 'Shreedhar';
var secondName = 'GANAPATHI';

var password = 'hello123';
var sentence = 'Jack and Jill went to hill.Jack killed Jill';

console.log(password.length);//8-length is a property
console.log(firstName.toUpperCase());
console.log(secondName.toLocaleLowerCase());
console.log(sentence.indexOf('him'));//-1
console.log(sentence.lastIndexOf('J'));
console.log(firstName.charAt(5));
console.log(sentence.includes('kill'));//true

console.log('hi'.repeat(4));

console.log(firstName.slice(1,5));
console.log(firstName.slice(2));

console.log(firstName.slice(3,6));//from 3 to 6
console.log(firstName.substr(3,6));//from 3 upto 6 characters

var phoneNumber = '1234567890'
console.log('(' + phoneNumber.slice(0,3) + ')' + ' ' + phoneNumber.slice(3,6) + '-' + phoneNumber.slice(6));

var firstHalf = phoneNumber.slice(0,3);
var secondHalf = phoneNumber.slice(3,6);
var thirdHalf = phoneNumber.slice(6); 
console.log(`${firstHalf}) ${secondHalf}-${thirdHalf}`);
