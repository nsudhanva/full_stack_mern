var axios = require("axios");

var url = 'http://dct-api-data.herokuapp.com/products.json?category=Books'

axios.get(url)
.then(function(response){
    var books = response.data;
    books.forEach(function(book){
        console.log(book.reviews.length);
    })
})

.catch(function(err){
    console.log(err);
});