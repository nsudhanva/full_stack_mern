const { Ticket } = require('./ticket');

let ticket1 = new Ticket({
    name:'Arjun',
    department:'Technical',
    priority:'High',
    message:'Internet is not working'
});

ticket1.save();

//Ticket.findAll();
Ticket.findByCode('DCT-204b');
Ticket.findByPriority('High');

//ticket.reset();