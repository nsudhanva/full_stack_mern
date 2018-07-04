var axios = require('axios');
function Product(data){
    this.name = data.name;
    this.price = data.price;
    this.category = data.category;
    this.cod = data.cod;
    this.stock = data.stock;
    this.submit = function(){
    var dataTosend = {
        name:this.name,
        price:this.price,
        category:this.category,
        cod:this.cod,
        stock:this.stock
    };
    axios.post('http://dct-api-data.herokuapp.com/products.json',dataTosend)
    .then(function(response){
        console.log(response.data);
    })
    .catch(function(err){
        console.log('These error prohibited data from being sent');
        var errors = err.response.data;
        for(key in errors)
        console.log(key, errors[key].join(', '));
        
    });
}
}

var p1 = new Product({name:'Marker',price:'25',category:'Grocery',cod:'true',stock:'no stock'});
p1.submit();