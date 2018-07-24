
function incDec(number)
{
    let i = 0;
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

let number = 2;
let num = 0;
let res = [];
console.log(incDec(number));
