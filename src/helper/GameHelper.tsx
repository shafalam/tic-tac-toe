
export const intelligentMove = (player: string, winnerPattern:number[][], current: string[], freeCells: number[]): number => {
    let moveOpponent: number = -100;
    let movePlayer: number = -100;

    // whichever pattern appers first
    for(let i = 0; i < winnerPattern.length - 1; i++){
        let [a, b, c] = winnerPattern[i];
        
        if(current[a] === current[b]){
            if(freeCells.includes(c)){
                if(current[a] === player){
                    movePlayer = c;
                } else{
                    moveOpponent = c;
                }

            }
        } else if(current[b] === current[c]){
            if(freeCells.includes(a)){
                if(current[b] === player){
                    movePlayer = a;
                } else{
                    moveOpponent = a;
                }
            }
        } else if(current[a] === current[c]){
            if(freeCells.includes(b)){
                if(current[a] === player){
                    movePlayer = b;
                } else{
                    moveOpponent = b;
                }
            }
        }
    }

    let firstMove: number = -100;
    // first moves for winning
    for(let i = 0; i < winnerPattern.length - 1; i++){
        let [a, b, c] = winnerPattern[i];
        if(freeCells.includes(a)){
            firstMove = a;
        } else if(freeCells.includes(b)){
            firstMove = b;
        } else if(freeCells.includes(c)){
            firstMove = c;
        }
    }

    if(movePlayer > 0){
        return movePlayer;
    } else if(moveOpponent > 0){
        return moveOpponent;
    } else {
        return firstMove;
    }

    // let [c, d, e] = winnerPattern[0];

    // // defence
    // for (let i = 0; i < winnerPattern.length - 1; i++) {
    //   let [a, b, c] = winnerPattern[i];
    //   if ((squares[a] === "X") && (squares[c] === "X") ) {
    //     if(freeCells.includes(b)){
    //         return b;
    //     }
    //   } else if ((squares[b] === "X") && (squares[c] === "X")) {
    //     if(freeCells.includes(a)){
    //         return a;
    //     }
    //   } else if ((squares[a] === "X") && (squares[b] === "X")) {
    //     if(freeCells.includes(c)){
    //         return c;
    //     }
    //   }  
    // }

    // // move for possible winning
    // for (let i = 0; i < winnerPattern.length - 1; i++) {
    //   let [a, b, c] = winnerPattern[i];
    //   if ((squares[a] === player) && (squares[c] === player) ) {
    //     if(freeCells.includes(b)){
    //         return b;
    //     }
    //   } else if ((squares[b] === player) && (squares[c] === player)) {
    //     if(freeCells.includes(a)){
    //         return a;
    //     }
    //   } else if ((squares[a] === player) && (squares[b] === player)) {
    //     if(freeCells.includes(c)){
    //         return c;
    //     }
    //   }  
    // }

    // // move for a possible winning pattern
    // for (let i = 0; i < winnerPattern.length - 1; i++) {
    //   let [a, b, c] = winnerPattern[i];
    //   if((squares[a] !== player) && (squares[a] !== "X")){
    //     if((squares[b] !== player) && (squares[b] !== "X")){
    //       if((squares[c] !== player) && (squares[c] !== "X")){
    //         return a;
    //       }
    //     } 
    //   }   
    // } 

     return 1;
  }