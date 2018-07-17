var baseUrl = 'http://dct-api-data.herokuapp.com'
var key = 'adaed46e71037faa';

var countHandle = document.getElementById('count');
var tableBodyHandle = document.getElementById('tableBody');
var ticketFormHandle = document.getElementById('ticketForm'); 

var nameHandle = document.getElementById('name');
var nameErrorHandle = document.getElementById('nameError');

var departmentHandle = document.getElementById('department');
var departmentErrorHandle = document.getElementById('departmentError');

var priorityHandle = document.getElementById('priority');
var priorityNames = document.getElementsByName('priority'); 

var priorityErrorHandle = document.getElementById('priorityError');
var text = document.createTextNode('select priority');


var messageHandle = document.getElementById('message'); 
var messageErrorHandle = document.getElementById('messageError');

var hasError = {
    name:true,
    department:true,
    priority:true,
    message:true
}

function buildRow(ticket){
    console.log('building row')
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



function getPriorityValue(){
    for(var i = 0; i < priorityNames.length; i++) {
        if(priorityNames[i].checked){
            return priorityNames[i].value; 
        }
    }
}

function validateName(){
    console.log('validating name');
    if(nameHandle.value.length == 0){
        nameErrorHandle.innerHTML = 'name cannot be empty'; 
    }
    else{
        hasError.name = false;
    }
};

function validateDepartment(){
    console.log('validating department');
    if(departmentHandle.value == ''){
        var depText = document.createTextNode('select department');
        departmentErrorHandle.appendChild(depText);
    }
    else{
        hasError.department = false;
    }
};

function validatePriority(){  
    console.log('validating priority');
    var result = false; 
    priorityNames.forEach(function(name){
        if(name.checked == true){
            result = true;
        }
    });

    if(result == false){
        priorityErrorHandle.appendChild(text);
    }
    else{   
        hasError.priority = false;
    }
}

function validateMessage(){
    console.log('validating message');

        if(messageHandle.value == ''){
            var messageErrorText = document.createTextNode('Enter message');
            messageErrorHandle.appendChild(messageErrorText);   
        }
        else{
            hasError.message = false;
        }
    }

ticketFormHandle.addEventListener('submit', function(e){

    validateName();
    validateDepartment();
    validatePriority();
    validateMessage();

    if(Object.values(hasError).includes(true)){
        e.preventDefault();
    }
    else{
          
        var formData = {
        name: nameHandle.value,
        department: departmentHandle.value,
        priority: getPriorityValue(),
        message: messageHandle.value 
    };

        axios.post(`${baseUrl}/tickets?api_key=${key}`, formData)
        .then(function(response){
        console.log(response.data)
        var ticket = response.data; 
        buildRow(ticket); 
        countHandle.innerHTML = parseInt(countHandle.innerHTML) + 1; 
        ticketFormHandle.reset(); 
    })
    .catch(function(err){
        console.log(err); 
     })   
}
}, false); 

window.addEventListener('load',function(){
    axios.get(`${baseUrl}/tickets?api_key=${key}`)
    .then(function(response){
        console.log(response.data);
        var tickets = response.data; 
        countHandle.innerHTML = tickets.length; 
        tickets.forEach(function(ticket){
        buildRow(ticket); 
    });
})
.catch(function(err){
    console.log(err);
})
})
