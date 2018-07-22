function Greet(name){
    this.name = name;
    this.greet = function(secName){
        this.secName = secName;
        console.log(secName);
        return 'Hi, I am '+ this.name + this.secName;
    }
}

var greet1 = new Greet('Shreedhar');
var greet2 = new Greet('Shreekar');

String.prototype.camelCase = function(){
    var result = this.split(' ');
    var output = result[0].toLowerCase();
    for(var i = 0;i < result.length - 1;i++){
        output += result[i][0].toUpperCase() + result[i].slice(1);
    }  
    return output;
}

var name = 'basappa channappa gowda '
console.log(name.camelCase());
