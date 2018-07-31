const { Ticket } = require('./ticket');
//npm install --save yargs
const { argv } = require('yargs');


/* 
node filename command options
node app.js findAll
node app.js save --name='shreedhar' --department='Technical' 
node app.js findByCode --code='DCT-bcc1'
node app.js findByPriority
*/

let command = argv._[0];

if(command == 'findAll'){
    Ticket.findAll();
}else if(command == 'save'){
    let ticket = new Ticket({
        name:argv.name,
        department:argv.department,
        priority:argv.priority,
        message:argv.message
    });
    ticket.save();
}else if(command == 'findByCode'){
    Ticket.findByCode(argv.code);
}else if(command == 'findByPriority'){
    Ticket.findByPriority(argv.priority);
}else{
    console.log('Invalid command');
}

// let ticket1 = new Ticket({
//     name:'Arjun',
//     department:'Technical',
//     priority:'High',
//     message:'Internet is not working'
// });

//ticket1.save();

//Ticket.findAll();
// Ticket.findByCode('DCT-204b');
// Ticket.findByPriority('High');
//Ticket.findOneAndUpdate('DCT-204b')

Ticket.findOneAndDelete('DCT-204b');
//ticket.reset();