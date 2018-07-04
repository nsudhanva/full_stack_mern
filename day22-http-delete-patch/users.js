var axios = require('axios');

var url = 'https://jsonplaceholder.typicode.com/users'

axios.get(url)
.then(function(response){
    for(var i = 0;i < response.data.length;i++){
    console.log('name:',response.data[i].name);
    console.log('username:',response.data[i].username);
    console.log('email:',response.data[i].email);
    console.log('address:',response.data[i].address.street,response.data[i].address.city);
    console.log('phone:',response.data[i].phone);
    console.log('company:',response.data[i].company.name);
    console.log('\n'); 
    }
})

.catch(function(err){
    console.log(err.response.data);
})
