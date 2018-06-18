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
  function objectifier(){
      return `{
        ${data[0][0]}:{
        ${data[0][1][0]}:['${data[0][1][1][0]}','${data[0][1][1][0]}'],
        ${data[0][1][2]}:['${data[0][1][3][0]}','${data[0][1][3][0]}'],
        ${data[0][1][3]}:'['${data[0][1][3][]}]'}
      }`
  }

  console.log(objectifier(data));