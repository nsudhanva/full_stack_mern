var baseUrl = 'http://dct-api-data.herokuapp.com'
var key = 'adaed46e71037faa';

var idHandle = document.getElementById('id');
var countHandle = document.getElementById('count');
var tableBodyHandle = document.getElementById('tableBody');
var ticketFormHandle = document.getElementById('ticketForm'); 

var nameHandle = document.getElementById('name');
var departmentHandle = document.getElementById('department');
var priorityHandle = document.getElementById('priority');
var priorityNames = document.getElementsByName('priority'); 
var messageHandle = document.getElementById('message'); 

var allHandle = document.getElementById('all');
var highHandle = document.getElementById('high');
var mediumHandle = document.getElementById('medium');
var lowHandle = document.getElementById('low');

var searchHandle = document.getElementById('search');

var alertHandle = document.getElementById('alert');

var showHandle = document.getElementById('show');

var progressHandle = document.getElementById('progress');


var showCount;
var showText;

var count;
var tickets; 
var inputs;



function filterTickets(priority){
    
    tableBodyHandle.innerHTML = '';
    count = 0;
    tickets.forEach(function (ticket) {
        if (ticket.priority === priority) {
            count++;
            buildRow(ticket);
        }
    });
    countHandle.innerHTML = count; 
}



searchHandle.addEventListener('keyup',function(){

    idCount = 1; //re initialising id count for updation in search bar part 

    tableBodyHandle.innerHTML = '';
    var searchResults = tickets.filter(function(ticket){
        return (ticket.ticket_code.toLowerCase().indexOf(searchHandle.value.toLowerCase()) >= 0 ||ticket.ticket_code.toLowerCase().indexOf(searchHandle.value.toLowerCase()) >= 0 || ticket.priority.toLowerCase().includes(searchHandle.value) || (ticket.department.toLowerCase().includes(searchHandle.value))); 
   });

   searchResults.forEach(function(ticket){
        buildRow(ticket); 
   })

   countHandle.innerHTML = searchResults.length;

   showHandle.innerHTML = '';  // resets the showing search results every time
   showText = document.createTextNode(`showing ${idCount - 1 } of ${showCount}  results`);showHandle.appendChild(showText); 
}, false);



highHandle.addEventListener('click', function(){
 filterTickets('High');
}, false); 

mediumHandle.addEventListener('click', function(){
  filterTickets('Medium');
}, false);

lowHandle.addEventListener('click', function(){
    filterTickets('Low');
}, false);

allHandle.addEventListener('click', function () {
    tableBodyHandle.innerHTML = '';
    tickets.forEach(function (ticket) {
        buildRow(ticket);
    });
    countHandle.innerHTML = tickets.length;
}, false);



var idCount = 1; //id count initialisation
var progress = 0;
var percent = 0;

function clickme(evt){
        if(evt.checked){
            url = `${baseUrl}/tickets/${evt.id}?api_key=${key}`
            console.log(url);
            axios.put(url,{"status":"completed"})
            .then(function(response){
                console.log(response.data);
            })
            .catch(function(err){
                console.log(err);
            })
            progress += 1;
            percent = progress/tickets.length * 100;
            progressHandle.setAttribute('style',`width:${percent}%`);
            console.log(progress,tickets.length,percent);
        }
        else{
            url = `${baseUrl}/tickets/${evt.id}?api_key=${key}`
            console.log(url);
            axios.put(url,{"status":"open"})
            .then(function(response){
                console.log(response.data);
            })
            .catch(function(err){
                console.log(err);
            })
            progress -= 1;
            percent = progress/tickets.length * 100;
            progressHandle.setAttribute('style',`width:${percent}%`);
            console.log(progress);

        }
    
};
function buildRow(ticket){

    var tr = document.createElement('tr');
    
    tr.innerHTML = `
        <td>${idCount++}</td> 
        <td>${ticket.ticket_code}</td>
        <td>${ticket.name}</td>
        <td>${ticket.department}</td>
        <td>${ticket.priority}</td>
        <td>${ticket.message}</td> 
        
        <td><input type="checkbox" ${ticket.status == 'completed'? 'checked':''} id="${ticket.ticket_code}" onclick="clickme(this)"/></td>
    `;
    tableBodyHandle.appendChild(tr); 
    
}


function getTickets() {
    axios.get(`${baseUrl}/tickets?api_key=${key}`)
        .then(function (response) {
            tickets = response.data;
            showCount = tickets.length;
            
            countHandle.innerHTML = tickets.length;
            tickets.forEach(function (ticket) {
                buildRow(ticket);

            })
            
           
            
            
            
            
           
        })
        .catch(function (err) {

        });

function getPriorityValue(){
    for(var i = 0; i < priorityNames.length; i++) {
        if(priorityNames[i].checked){
            return priorityNames[i].value; 
        }
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
        
      //  showText = document.createTextNode(`showing ${showCount} results`);
       
        console.log(showText.value);

        buildRow(ticket); 
        
        countHandle.innerHTML = parseInt(countHandle.innerHTML) + 1; 
        ticketFormHandle.reset();
        
        alertHandle.innerHTML = '<div class="alert alert-primary" role="alert">Added successfully</div>'
        setTimeout(function(){
            alertHandle.innerHTML = '';
        }, 3000);

    })
    
    .catch(function(err){
        console.log(err); 
    })

}, false); 

window.addEventListener('load', function(){
    getTickets(); 
}, false);