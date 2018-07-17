var baseUrl = 'http://dct-api-data.herokuapp.com'
var key = 'adaed46e71037faa';

var tickets;

var countHandle = document.getElementById('count');
var tableBodyHandle = document.getElementById('tableBody');
var ticketFormHandle = document.getElementById('ticketForm'); 
var nameHandle = document.getElementById('name');
var departmentHandle = document.getElementById('department');
var priorityHandle = document.getElementById('priority');
var priorityNames = document.getElementsByName('priority'); 
var messageHandle = document.getElementById('message'); 
var searchHandle = document.getElementById('search');
var allHandle = document.getElementById('all');
var lowHandle = document.getElementById('low');
var mediumHandle = document.getElementById('medium');
var highHandle = document.getElementById('high');
var selectHandle = document.getElementById('select');


searchHandle.addEventListener('keyup', function(){
    tableBodyHandle.innerHTML = '';
    var searchResults = tickets.filter(function(ticket){
       // return ticket.ticket_code.toLowerCase().indexOf(searchHandle.value.toLowerCase()) >= 0;
       return (ticket.name.toLowerCase().includes(searchHandle.value.toLowerCase())|| ticket.ticket_code.toLowerCase().indexOf(searchHandle.value.toLowerCase()) >= 0 || ticket.priority.toLowerCase().includes(searchHandle.value) || (ticket.department.toLowerCase().includes(searchHandle.value)));
    });

    searchResults.forEach(function(ticket){
        buildRow(ticket);
    });

    countHandle.innerHTML = searchResults.length;
}, false);

// allHandle.addEventListener('click', function(){
//     tableBodyHandle.innerHTML = '';
//     tickets.forEach(function(ticket){
//         buildRow(ticket);
//     });
// },false);

// lowHandle.addEventListener('click', function(){
// filterTickets('Low');   
// },false);

// mediumHandle.addEventListener('click', function(){
// filterTickets('Medium');
// },false);

// highHandle.addEventListener('click', function(){
// filterTickets('High');
// },false);

selectHandle.addEventListener('change', function(){
    //  var userInput = selectHandle.value;
    //  if(userInput){
    //      filterTickets(userInput);
    //  }else{
    //     tableBodyHandle.innerHTML = '';
    //         tickets.forEach(function(ticket){
    //         buildRow(ticket);
    //         });
    //  }
    if(selectHandle.value == 'High'){
        filterTickets('High');
    }
    else if(selectHandle.value == 'Medium'){
        filterTickets('Medium');
    }
    else if(selectHandle.value == 'Low'){
        filterTickets('Low');
    }
    else{
        tableBodyHandle.innerHTML = '';
        tickets.forEach(function(ticket){
            buildRow(ticket);
        });
    }
}, false);

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


function buildRow(ticket){
    var tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${ticket.ticket_code}</td>
        <td>${ticket.name}</td>
        <td>${ticket.department}</td>
        <td>${ticket.priority}</td>
        <td>${ticket.message}</td> 
        <td>${ticket.status}</td>
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