function isDivisible(n, x, y)
{
    if((n % x === 0) && (n % y === 0))
    {
        return 'True';
    }
    else
    {
        return 'False';
    }
}

console.log(isDivisible(3, 1, 5));