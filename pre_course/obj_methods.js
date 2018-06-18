var person = 
{
    firstName: 'Shreedhar',
    city: 'Bhatkal'
}

console.log(person.firstName);
console.log(Object.keys(person));
console.log(Object.values(person));

for(var key in person)
{
    console.log(key, person[key]);
}