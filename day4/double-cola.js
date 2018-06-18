function result(names,n){
    for(var i = 0;i < n;i++){
        var removed = names.shift();
        for(var j = 0;j < 2;j++){
            names.push(removed);
        }

    }
    return names[0];
}

names = ['Sheldon','Leonard','Peny','Rajesh','Howard'];

console.log(result(names,6));