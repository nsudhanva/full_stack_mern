// 1. Create a class called Employee that includes three pieces of information as instance variables—a first name  , a last name  and a monthly salary. Your class should have a constructor that initializes the three instance variables. If the monthly salary is not positive, set it to 0.0. Create two Employee objects and display each object’s yearly salary. Then give each Employee a 10% raise and display each Employee’s yearly salary again.


// 2. Create a class called Book to represent a book. A Book should include four pieces of information as instance variables‐a book name, an ISBN number, an author name and a publisher. Your class should have a constructor that initializes the four instance variables. Provide a method named getBookInfo that returns the description of the book as a String (the description should include all the information about the book). You should use this keyword in member methods and constructor. 


// 3. Your job is to create a class Dictionary which you can add words to and their entries. Example:

// >>> let d = new Dictionary();

// >>> d.newEntry("Apple", "A fruit that grows on trees");

// >>> console.log(d.look("Apple"));
// A fruit that grows on trees

// >>> console.log(d.look("Banana"));
// Cant find entry for Banana

// class Employee{
//     constructor(firstName, lastName, salary = 0){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.salary = salary;
//         this.hike = 10/100 * this.salary;
//     }

//     displaySalary(){
//         return `Salary - ${this.salary}`;
//     }
    
//     displayHike(){
//         return `Before hike-${this.salary * 12},After hike-${(this.salary + this.hike) * 12}`
//     }

// }

// let emp1 = new Employee('Shreedhar','Hegde',10000);
// console.log(emp1.displaySalary())
// console.log(emp1.displayHike());

// class Book{
//     constructor(bookName, ISBN, author, publisher){
//         this.bookName = bookName;
//         this.ISBN = ISBN;
//         this.author = author;
//         this.publisher = publisher;
//     }

//     getInfo(){
//         return `Title-${this.bookName},Author-${this.author},ISBN-${this.ISBN},Publisher-${this.publisher}`
//     }

// }

// let book = new Book('Karvalo','K.P.P',123456,'Kuvempu Prathisthana');
// console.log(book.getInfo());

class Dictionary{

    constructor(){
       this.data = [];
    }

    newEntry(word,meaning){
        this.data.push({word,meaning});
    }
    look(search){
        console.log('from look',search);
        let result = this.data.find(function(ele){
                return ele.word == search;
            });
    
            if(result == undefined){
                return 'Not found';
            }
            else{
                return result;
            }
}

}

let d1 = new Dictionary();

d1.newEntry('Banana','Fruit');
d1.newEntry('Mango','tasty fruit');
console.log(d1.data);
console.log(d1.look('Banana'));
// d1.newEntry('sapota','good');
console.log(d1.look('wm'));

