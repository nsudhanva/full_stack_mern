var num = 50;

var rand = (Math.random() * 100);

if(rand < num)
{
    console.log('Lesser');
}
else if(rand > num)
{
    console.log('Greater');
}
else
{
    console.log('equal');
}