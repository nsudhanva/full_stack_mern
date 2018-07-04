
// INPUT: totalPortfolioValue(ticker, portfolio);
// OUTPUT: 4050 //calculated as200 20 + 5 10

function totalPortfolioValue(a,b){
    var storeOne = [];
    b.forEach(function(value){
        storeOne.push(value[1]);
        //console.log(storeOne);
    });
    var storeTwo = [];
    a.forEach(function(value){
        if((typeof value) === 'number'){
            storeTwo.push(value);
            //console.log(storeTwo);
        }
    })
    return (storeOne[0] * storeTwo[1] + storeOne[1] * storeTwo[2])
    // for(var i = 0;i < ticker.length;i++){
    //     //if(portfolio[i][i] == ticker[i]){
    //         console.log(portfolio[i][i]);
    //         console.log(ticker[i]);
    //         //return (portfolio[i][1] * ticker[i + 1]) 
    //     //}
    // }
    //console.log(portfolio[0][0]);
    //console.log(ticker[0]);
}
var ticker = ['ABC', 10, 'XYZ', 200, 'BBB', 5];
var portfolio = [['XYZ', 20], ['BBB', 10]];
console.log(totalPortfolioValue(ticker,portfolio));