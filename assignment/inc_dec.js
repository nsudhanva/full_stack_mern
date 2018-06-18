
function incDec(number)
{
    var i = 0;
    while(i <= number)
    {
        
        res.push(num);
        console.log("from up",num);
        num++;
        i++;
        
    }
     num = number;
    while(i > number)
    {
        --num;
        res.push(num);
        console.log("from down",num);
        if(num == 0)
        break;
    }
    return res;
}

var number = 2;
var num = 0;
var res = [];
console.log(incDec(number));
