var student = ['Ravi DL','ravi.daasari@gmail.com','9945371612','web development','reference'];

var nestedStudent = [
    ['name','ravi'],
    ['email','ravi@gmail.com'],
    ['mobile','54465445'],
    ['course','web development'],
    ['source','reference']

];

console.log(nestedStudent[0][0],nestedStudent[0],[1]);

var studentObject = {
    name:'ravi',
    email:'ravi@gmail.com',
    mobile:'54465445',
    course:'web development',
    source:'reference',
    skills:['ruby','python','js'],
    education:[{'12th':2012},{'degree':2016},{'masters':2018}]

};

console.log('Name', studentObject.name);
console.log('Skills', studentObject.skills);
console.log('does he knows node',studentObject.skills.includes('js'));
console.log('Education 12th',studentObject.education[0]);
console.log('Education 12th pass year',studentObject.education[0]["12th"]);