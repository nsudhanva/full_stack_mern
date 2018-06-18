function startAt(a,b){
    var store = [];
    store = a.split(' ');
    console.log(store);
    if(store[0] == b){
        return true;
    }
    else{
        return false;
    }
}

console.log(startAt('js string exercises', 'js'));