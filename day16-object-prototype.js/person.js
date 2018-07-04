function Person(name, age){
    this.name = name;
    this.age = age;
    this.description = function(){
        return `${this.name} is ${this.age}`
    }
}

var person = new Person('Rakesh',25);
console.log(person.description());
//new property being assigned to obj person
person.education = 'BE civil';
console.log(person.education);
person.skills = ['js','py','rb'];
person.fullDetails() = function(){
    return `${this.name} knows ${this.skills}`;
}
console.log(person.fullDetails());

var singer = new Person('Linkin Park',42);
console.log(singer.name);
console.log(student.skills);
//console.log(singer.skills);
//console.log(singer.fullDetails);

var player = new Person('Virat', 30);

var student = new Person('Ravi',35);
console.log(student.description());

//student does not have educaton property
console.log(student.education);//undefined
 console.log(student.skills);//undefined

 //console.log(student,fullDeatils()); -- function not defined


