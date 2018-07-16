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

axios.get(`${baseUrl}/tickets?api_key=${key}`)
.then(function(response){
    var tickets = response.data; 
    countHandle.innerHTML = tickets.length; 
    tickets.forEach(function(ticket){
        buildRow(ticket); 
    })
})
.catch(function(err){

})

function getPriorityValue(){
    for(var i = 0; i < priorityNames.length; i++) {
        if(priorityNames[i].checked){
            return priorityNames[i].value; 
        }
    }
}

function validateName(){
    var nameValue = true;
    if(nameHandle.value.length == 0){
        nameErrorHandle.innerHTML = 'name cannot be empty'; 
    }
};

function validateDepartment(){
    var invalid = departmentHandle.value = '';
    if(departmentHandle.value == invalid){
        console.log(departmentHandle.value);
        var depText = document.createTextNode('select department');
        departmentErrorHandle.appendChild(depText);
    }
};

function validatePriority(){  
    var result = false; 
    priorityNames.forEach(function(name){
        if(name.checked == true){
            result = true;
        }
    });

    if(result == false){
        priorityErrorHandle.appendChild(text);
    }
}

function validateMessage(){
    
}

ticketFormHandle.addEventListener('submit', function(e){
    validateName();
    validateDepartment();
    validatePriority();
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