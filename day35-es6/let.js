// variables created using var in js is function scoped
//variables created usig let in js is block scoped

let players = ['sachin', 'dhoni', 'virat'];

function listPlayers(){
    for(var i = 0;i < players.length;i++){
        console.log(players[i]);
    }
    console.log(i);
}
listPlayers();
//console.log(i);//ReferenceError: i is not defined;

function displayPlayers(){
    for(j = 0;j < players.length;j++){
        console.log(players[j]);
    }
    //console.log(j); //refernceError: j is not defined(not available outside the block of code)
}
displayPlayers();

(function(){
    var n1 = 10;
    if(n1 == 10){
        var inString = 'ten';
    }

    console.log(n1);
    console.log(inString);
}());

(function(){
    let a1 = 20;
    if(a1 === 20){
        let inStr = 'twenty';
    }
    console.log(a1);
    //console.log(inStr); //ReferenceError: inStr is not defined; 
})();