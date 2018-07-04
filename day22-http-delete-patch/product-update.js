var axios = require('axios');

var id = 305;
var url = `http://dct-api-data.herokuapp.com/products/${id}.json`

axios.put(url, {  //axios.patch
    price:1200,
    stock:110

})

.then(function(response){
    console.log(response.data)
})

.catch(function(err){
    console.log(err);
})