function Person(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.greet = function(){
        return `Hello,${this.firstName} ${this.lastName}`
    }
}

var person1 = new Person('Shreedhar','Hegde');
console.log(person1.greet());