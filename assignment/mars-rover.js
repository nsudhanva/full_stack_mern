function marsRover(a, b, c, d){
    let dir = ['W','S','E','N'];
    let lCount = 0;
    let move = d.split('');
    if(c == 'N'){
        for(let i = 0;i < move.length;i++){
           
            if(lCount == dir.length){
                lCount = 0;
            }
            if(move[i] == 'L'){
                c = dir[lCount];
                lCount++;
                console.log(c);
            }  
        }

        for(let i = 0;i < move.length;i++){
            for(let j = 0;j < dir.length;j++){

                console.log(i,j,move[i],dir[j]);
                if(move[i] == 'M' && dir[j] == 'W'){
                    a--;
                    console.log(a);
                }
                else if(move[i] == 'M' && dir[j] == 'E'){
                    a++;
                    console.log(a);
                } 
                else if(move[i] == 'M' && dir[j] == 'N'){
                    b++;
                    console.log(move[i],dir[j],b);
                }
                
                else if(move[i] == 'M' && dir[j] == 'S'){
                    b--;
                    console.log(move[i],dir[j],b);

                }
               
            }
        }
    }
    
}
console.log(marsRover(1,2,'N','LMLMLMLMM'));

