// Author: Shreedhar
// {
//     animals : {
//       dogs : ['Corgi', 'Sheltie'],
//       cats : ['Tabby','Black'],
//       pigs : ['Teacup']
//   },
//     guitars : {
//       Fender : ['Telecaster', 'Stratocaster','Jazzmaster'],
//       Gibson : ["Gibson Flying-V", 'Firebird', 'Les Paul']
//     }
//   }
var data = [[ 'animals',['dogs', ['Corgi', 'Sheltie'],'cats', ['Tabby','Black'],'pigs', ['Teacup']]],
    [ 'guitars',['Fender', ['Telecaster', 'Stratocaster','Jazzmaster'],'Gibson', ["Gibson Flying-V",'Firebird', 'Les Paul']]]];
    function objectifier(a){
        let obj = {};
           for(let i = 0; i < a.length; i++) {
               let firstkey = a[i][0];
               obj[firstkey] = {};
               let secondKey = a[i][1];
               for(let j = 0; j < secondKey.length; j++) {
                   if(j % 2 === 0) {
                   obj[firstkey][secondKey[j]] = secondKey[j+1];
                   }
               }
           }
           return obj;
       }
console.log(objectifier(data));
