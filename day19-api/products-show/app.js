var axios = require('axios');
var url = 'http://dct-api-data.herokuapp.com/products.json';

axios.get(url)
.then(function(response){
    console.log(response.data);
    //var products = response.data.category['grocery'];
    //console.log('Listing product',product.length);
    //console.log(`name     category     price`);
        //console.log(`#name-${products.name}`);

})

.catch(function(err){
    console.log(err);
});