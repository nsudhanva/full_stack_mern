var numbers = [10,15,20,30,35];

var result = numbers.filter(function(n) {
    return n % 2 == 0;
});
console.log(result);

var greaterThan25 = numbers.filter(function(n) {
    return n > 25;
});
console.log(greaterThan25);

var greaterThan250 = numbers.filter(function(n){
    return n > 250;
})
console.log(greaterThan250);

//node JS -> arrow function
//var evens = number.filter(n => n % 2 === 0);
//console.log(evens)

var values  = ['dct',56001,'academy','bengaluru',430];

function filterStrValues(values){
    var result = values.filter(function(str){
        return (typeof(str) == 'string');
    });
    return result;
}
console.log(filterStrValues(values));

function filterNumValues(values){
    var result = values.filter(function(str){
        return (typeof(str) == 'number');
    });
    return result;
}
console.log(filterNumValues(values));

function filterValues(values,type){
    var result = values.filter(function(value){
        return (typeof(value) == type);
    });
    return result;
}

console.log(filterValues(values,'number'));
console.log(filterValues(values,'string'));

var students = ['ravi','rakesh','pavan','pavan'];
function findTmes(students,search){
    var times = students.filter(function(student){
            return student === search;
    });
    if(times.length == 0) {
        return `${search} appears 0 time(s)`;
    }
    else {
        return `${search} appears ${times.length} time(s)`;
    }
    
}

console.log(findTmes(students,'pavan'));
console.log(findTmes(students,'gokul'));
