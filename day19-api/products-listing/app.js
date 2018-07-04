//url - http://dct-api-data.herokuapp.com/products.json

var axios = require('axios');
var url = 'http://dct-api-data.herokuapp.com/products.json';

axios.get(url)
.then(function(response){
    var products = response.data;
    var items = [];
    var count_of_cod = 0;
    var count_of_stock = 0;
    var count_of_price = 0;
    var count_of_price_range = 0;


    products.forEach(function(product){
        if(product.category == 'Grocery'){
            console.log(product.name)
        }
        if(product.cod == false){
            count_of_cod++;
        }
        if(product.stock == 0){
            count_of_stock++;
        }
        if(product.price > 2500){
            count_of_price++;
        }
        if(product.price > 2500 && product.price < 3500 ){
            count_of_price_range++;
        }
        if(product.category == 'Books' || product.category == 'Games' ){
            console.log(`${product.name} belongs to ${product.category}`)
        }
    })
    console.log(count_of_cod);
    console.log(count_of_stock);
    console.log(count_of_price);
    console.log(count_of_price_range);




})

.catch(function(err){
    console.log(err);
});

