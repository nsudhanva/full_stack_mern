var axios = require("axios");

var url = 'http://dct-api-data.herokuapp.com/products/302.json'

axios.get(url)
.then(function(response){
    var product = response.data;
    console.log(`${product.name} ${product.price} ${product.category}`)
console.log('listing reviews: ' + product.reviews.length);
product.reviews.forEach(function(review){
    console.log(`Body - ${review.body} \nUser - ${review.user}\nRating - ${review.rating} \n\n`);
})
})
.catch(function(err){
    console.log(err);
});

