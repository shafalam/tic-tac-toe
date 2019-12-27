
export const intelligentMove = (player: string, winnerPattern:number[][], current: string[], freeCells: number[]): number => {
    let moveOpponent: number = -100;
    let movePlayer: number = -100;


    // whichever pattern appers first
    for(let i = 0; i < winnerPattern.length; i++){
        let [a, b, c] = winnerPattern[i];       
        if((current[a] === current[b]) && current[a] !== null){
            if(freeCells.includes(c)){
                if(current[a] === player){
                    movePlayer = c;
                } else{
                    moveOpponent = c;
                }

            }
        } else if((current[b] === current[c]) && current[b] !== null){
            if(freeCells.includes(a)){
                if(current[b] === player){
                    movePlayer = a;
                } else{
                    moveOpponent = a;
                }
            }
        } else if((current[a] === current[c]) && current[a] !== null){
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
  }