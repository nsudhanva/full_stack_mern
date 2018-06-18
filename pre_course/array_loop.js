var players = ['kohli' , 'root' , 'williamson', 'smith'];

for(var i = 0;i < players.length;i++)
{
    console.log(i,players[i]);
}

players.forEach(function(player)
{
    console.log(player);
})