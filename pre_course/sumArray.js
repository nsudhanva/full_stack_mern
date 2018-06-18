function sumArray(numbers)
{
    var sum = 0;  
    if (numbers.length === 0)
    return 0;  
    for(var i = 0;i < numbers.length;i++)
    {
        if(numbers[i] > 0)
        {
            sum = sum + numbers[i];
        }
    }
    return sum;
}

var numbers = [10, 52, 4.5, -10];
console.log(sumArray(numbers));

var numbers1 = [28, 49, -8, 0.5];
console.log(sumArray(numbers1));

var numb = [];
console.log(sumArray(numb));