
var axios = require('axios');

var url = 'https://api.openaq.org/v1/countries'
var lessThan = [];
var greaterThan = [];
axios.get(url)
.then(function(response){
    //console.log(response.data.results)
    response.data.results.forEach(function(result){
        //console.log(result.name);
        if(result.count < 50000){
            lessThan.push(result.name);
        }
        else{
            greaterThan.push(result.name);
        }
    })
    console.log(`Countries with air quality count more than 5000-${greaterThan.join(',')}\n`);
    console.log(`Countries with air quality count less than 5000-${lessThan.join(',')}`);
})
.catch(function(err){
    console.log(err);
})