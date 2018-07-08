// Write a JavaScript function to convert an object into a list of `[key, value]` pairs

// Sample:   keyValue({'name':'Rama','city':'Ayodya'})

// Output:   [['name','Rama'],['city','Ayodya']]

function keyValue(a){
    var result = Object.keys(a).map(function(key) {
        return [key, a[key]];
      });
      return result;
}
a = {'name':'Rama','city':'Ayodya'}
console.log(keyValue(a));