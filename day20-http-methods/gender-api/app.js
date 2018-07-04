var axios = require("axios");
var url = 'https://www.gender-api.com/get?name=anarghya&key=pRPLCejozFwCHFbVCR'
axios.get(url)
// var name  = 'dona';
// var key = 'pRPLCejozFwCHFbVCR';
// var uri = 'https://www.gender-api.com/get'
// axios.get(uri, {
//     params:{
//      name,
//         key
//     }
// })
//es6 feature =  conscise properties(when property name and the variable name used to assign to the property is the same then we can mention the property name inside the object)
.then(function(response){
   console.log(response.data.gender);
})
.catch(function(err){
    console.log(err);
});
