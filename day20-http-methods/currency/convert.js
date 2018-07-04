var axios = require("axios");
var url = 'http://free.currencyconverterapi.com/api/v5/convert?q=EUR_INR&compact=y'
axios.get(url)
.then(function(response){
   var value = response.data.EUR_INR.val
   function converter(inr){
    var result = value * inr;
    console.log(result);
}
converter(1);
})
.catch(function(err){
    console.log(err);
});
