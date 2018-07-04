var axios = require('axios');

var url = 'http://dct-api-data.herokuapp.com/users/5.json'

axios.delete(url)
.then(function(response){
    console.log(response.data)
})

.catch(function(err){
    console.log(err.response.data);
})