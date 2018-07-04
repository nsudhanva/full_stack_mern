var song1 = {
    name : 'numb',
    artist: 'linkin park',
    duration:'3 minutes 10 seconds',
    play:function(){
        return `${this.name} by ${this.artist} duration is ${this.duration} playing`
    },
    stop:function(){
        return `${this.name} by ${this.artist} has stopped`
    }
    
}

var song2 = {
    name : 'hello',
    artist: 'adelle',
    duration:'5 minutes',
    play:function(){
        return `${this.name} by ${this.artist} duration is ${this.duration} playing`
    },
    stop:function(){
        return `${this.name} by ${this.artist} has stopped`
    }
}

var song3 = {
    name : 'legacy',
    artist: 'eminem',
    duration:'6 minutes',
    play:function(){
        return `${this.name} by ${this.artist} duration is ${this.duration} playing`
    },
    stop:function(){
        return `${this.name} by ${this.artist} has stopped`
    }
}

console.log(song1.play());
console.log(song1.stop());
console.log(song2.play());
console.log(song2.stop());
console.log(song3.play());
console.log(song3.stop());