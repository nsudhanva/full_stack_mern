//the prototype property allows you to add properties and methods (string,boolean,array and user defined)
String.prototype.toCapitalise = function(){
    return this[0].toUpperCase() + this.slice(1);
}

Array.prototype.unique = function(){
    var result = [];
    this.forEach(function(ele){
        if(result.indexOf(ele) < 0){
            result.push(ele);
        }
    });
    return result;
}

Array.prototype.first = function(){
    return this[0];
}
Array.prototype.last = function(){
    return this[this.length - 1];
}

String.prototype.camelCase = function(){
    var result = this.split(' ');
    var outPut = result[0].toLowerCase();
    for(var i = 1;i < result.length;i++){
        outPut += result[i][0].toUpperCase() + result[i].slice(1);
    }
    return outPut;
}

Array.prototype.deleteAt = function(index){
   this.splice(index,1);
   return this;
} 

Array.prototype.insertAt = function(index,value){
    this.splice(index, 0, value);
    return this;
}

Array.prototype.delete = function(str){
    for(var i = 0;i < this.length;i++){
        if(this[i] == str){
            this.splice(i,1);
        }
    }
    return this;
}


var name = 'Shreedhar ganapti hegde';
var numbers = [10, 20, 30, 40, 10, 20];
var names = ['ramesh','harish','ramesh'];

console.log(name.toCapitalise());
console.log(numbers.unique());
console.log(names.unique());
console.log(numbers.first());
console.log(numbers.last());
console.log(name.camelCase());
console.log(numbers.deleteAt(2));
console.log(numbers.insertAt(2,35));
console.log(numbers.delete(10));
console.log(names.delete('harish'));


