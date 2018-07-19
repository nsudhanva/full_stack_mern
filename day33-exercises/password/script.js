var passwordHandle = document.getElementById('password');

var showHandle = document.getElementById('show');
showHandle.addEventListener('click', function(){
    if (showHandle.checked){
        passwordHandle.setAttribute('type','text');
    }
    else{
        passwordHandle.setAttribute('type','password');
    }
});