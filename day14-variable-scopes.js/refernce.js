//when ever we pass argument like arrays,object,date it will refer variable defined inn the global scope

var numbers = [10];

var person = {
    name:'Shree'
}

function changeNumber(numbers){
    numbers[0] = 100;
    console.log('inside function',numbers);
}

function changePerson(tutor){
    tutor.name = 'Anirudhha'
    console.log('inside function',tutor)
}

console.log('before calling function',numbers);
changeNumber(numbers);
console.log('after calling & outsidde function',numbers);

console.log('before calling function',person);
changePerson(person);
console.log('after calling & outsidde function',person);

