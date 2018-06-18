var student1 = {
     name:'shreedhar',
     email:'shreedhar@gmail.com',
     course:'m.c.a'
};

var student2 = {
    name:'adarsha',
    email:'adarsha@gmail.com',
    course:'b.c.a'
};

var student3 = {
    name:'vijay',
    email:'vijay@gmail.com',
    course:'js'
};

var students = [];
students.push(student1,student2,student3);

var display = students.forEach(function(value, index){
    console.log(index+1 + ' ' + value.name + ' |  ' + value.email + ' | '+ value.course);
});