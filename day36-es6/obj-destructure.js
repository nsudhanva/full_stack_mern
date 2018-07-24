let person = {
    firstName : 'Shreedhar',
    lastName: 'Hegde',
    city: 'Bengaluru',
    skills:['js','c']
}
//es5
console.log(person.firstName);
console.log(person.lastName);

let fN = person.firstName;

//es6
let{firstName, lastName, skills} = person;
console.log(firstName, lastName, skills);
