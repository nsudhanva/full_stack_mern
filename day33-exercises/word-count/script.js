var textAreaHandle = document.getElementById('textarea');

var charCount = 0;
var wordCount = 0;
var array;
var resultHandle = document.getElementById('result');

textAreaHandle.addEventListener('keyup', function(){
    if(textAreaHandle.value.length !== 0 ){
        array = textAreaHandle.value.split(' ').length;
        
    }
    else{
        array = 0;
    }
        charCount = textAreaHandle.value.length;
        //wordCount = array.length;
        resultHandle.innerHTML = `you have typed ${array} words and ${charCount} characters`;
    
       
    });
    

