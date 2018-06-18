numbers = [10,-20,30,-40]
function sumCount(numbers)
{
    var sum =  0, count = 0;
    numbers.forEach(function(num)
    {
        if(num > 0)
        {
            sum = sum + num;
        }
        else
        {
            count = count + 1;
        } 
    });

    return [sum, count];
}

console.log(sumCount(numbers));