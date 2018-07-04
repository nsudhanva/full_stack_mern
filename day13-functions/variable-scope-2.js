var n1 = 100;

function func1(){
    console.log('i am in func1');
    console.log(n1);//100
    var n2 = 200;
    function func2(){
    console.log('i am in func2');        
        console.log(n1);//100
        console.log(n2);//200
        var n3 = 300;
    }
    func2();
    //console.log(n3);
}
func1();
//console.log(n2)