var axios = require('axios');
var url = 'http://dct-api-data.herokuapp.com/users/16.json'
axios.get(url)
.then(function(response){
    var sum  = 0;
    var user = response.data;
    user.orders.forEach(function(order){
        sum = sum + order.order_total;
    })
    if(sum > 15000){
        console.log('privilige customer');
    }

})
.catch(function(err){
    console.log(err);
});