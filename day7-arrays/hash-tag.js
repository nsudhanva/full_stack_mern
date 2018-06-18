function hashTagGenerator(sentence){
    
        var array = sentence.split(' ');
        var store = [];
        
        for(var i = 0;i < array.length;i++){
            store.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
        }
        
        var tagPrev = store.join('');
        var tag = '#' + tagPrev; 

        if(tagPrev.length == 0 || tag.length > 140){
            return false;
        }
        else{
            return tag;
        }
}   

console.log(hashTagGenerator('i love this kata'));
