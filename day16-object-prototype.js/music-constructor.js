//object Prototype Function = Object constructor function - without arguments

//function declaration
//function name in pascal case

function Song(){
    //properties - name,artist,duration
    //methods - description,play,stop
    this.name;
    this.artist;
    this.duration;
    this.description = function(){
        return `${this.name} by ${this.artist} is ${this.duration} long`
    };
    this.play = function(){
        return `${this.name} by ${this.artist} is ${this.duration} is playing`        
    }
    this.stop = function(){
        return `${this.name} by ${this.artist} is ${this.duration} has stopped`        
    }
}

//var obj = new Object(){}
//var arr = new Arr();[]

var song1 = new Song();
song1.name = 'Numb';
song1.artist = 'Linkin Park';
song1.duration = '3 minutes 30 secnds';
console.log(song1);
console.log(song1.description());
console.log(song1.play());
console.log(song1.stop());

var song2 = new Song();
song2.name = 'hello';
song2.artist = 'adelle';
song2.duration = '3 minutes 0 secnds';
console.log(song2);
console.log(song2.description());
console.log(song2.play());
console.log(song2.stop());
