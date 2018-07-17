var baseUrl = 'http://dct-api-data.herokuapp.com'
var key = 'adaed46e71037faa';

var tickets;

function filterTickets(priority){
    tableBodyHandle.innerHTML = '';
    var count = 0;
    console.log(tickets);
    tickets.forEach(function(ticket){
        if(ticket.priority == priority ){
            count++;
            buildRow(ticket);
        }
    });
    countHandle.innerHTML = count;
}

var allHandle = document.getElementById('all');
allHandle.addEventListener('click', function(){
        tableBodyHandle.innerHTML = '';
        tickets.forEach(function(ticket){
            buildRow(ticket);
        });
},false);

var lowHandle = document.getElementById('low');
lowHandle.addEventListener('click', function(){
    filterTickets('Low');   
},false);

var mediumHandle = document.getElementById('medium');
mediumHandle.addEventListener('click', function(){
   filterTickets('Medium');
},false);

var highHandle = document.getElementById('high');
highHandle.addEventListener('click', function(){
    filterTickets('High');
},false);

var countHandle = document.getElementById('count');
var tableBodyHandle = document.getElementById('tableBody');
var ticketFormHandle = document.getElementById('ticketForm'); 

var nameHandle = document.getElementById('name');
var departmentHandle = document.getElementById('department');
var priorityHandle = document.getElementById('priority');
var priorityNames = document.getElementsByName('priority'); 
var messageHandle = document.getElementById('message'); 

function buildRow(ticket){
    var tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${ticket.ticket_code}</td>
        <td>${ticket.name}</td>
        <td>${ticket.department}</td>
        <td>${ticket.priority}</td>
        <td>${ticket.message}</td> 
    `;
    tableBodyHandle.appendChild(tr); 
}

function getTickets(){
    axios.get(`${baseUrl}/tickets?api_key=${key}`)
    .then(function(response){
    tickets = response.data; 
    countHandle.innerHTML = tickets.length; 
    tickets.forEach(function(ticket){
        buildRow(ticket); 
    })
})
    .catch(function(err){

    })
}


function getPriorityValue(){
    for(var i = 0; i < priorityNames.length; i++) {
        if(priorityNames[i].checked){
            return priorityNames[i].value; 
        }
    }
}

ticketFormHandle.addEventListener('submit', function(e){
    e.preventDefault(); 
    var formData = {
        name: nameHandle.value,
        department: departmentHandle.value,
        priority: getPriorityValue(),
        message: messageHandle.value 
    }; 

    axios.post(`${baseUrl}/tickets?api_key=${key}`, formData)
    .then(function(response){
        var ticket = response.data; 
        buildRow(ticket); 
        countHandle.innerHTML = parseInt(countHandle.innerHTML) + 1; 
        ticketFormHandle.reset(); 
    })
    .catch(function(err){
        console.log(err); 
    })

    console.log(formData); 
}, false); 

window.addEventListener('load', function(){
    getTickets();
}, false);