// Write a JavaScript function to convert an object into a list of `[key, value]` pairs

// Sample:   keyValue({'name':'Rama','city':'Ayodya'})

// Output:   [['name','Rama'],['city','Ayodya']]

var keyValue = (a) => {
    let result = Object.keys(a).map(function(key) {
        return [key, a[key]];
      });
      return result;
}
let a = {'name':'Rama','city':'Ayodya'}
console.log(keyValue(a));