//Iniciar váriaveis
let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['O', 'X'];
let gameOver = false;

let countTurn0 = 0;//Cria um contador para passar nas vezes que troca a vez para quando algum dos 2 chegar a 5 empatar o jogo
let countTurn1 = 0;

function handleMove(position) {
    
    /*if (gameOver) {
        return;
    }*/
    
    if (board[position] == '') {
        board[position] = symbols[playerTime];

        gameOver = isWin();
        
        
        if (gameOver == false) {
            if (playerTime == 0) {//Força o playertime fica no 0 e 1 para pegar os simbolos certos
                countTurn0++;
                console.log("0"+countTurn0)
                playerTime = 1;
            } else {
                countTurn1++;
                console.log("1"+countTurn1)
                playerTime = 0;
            }

                                    
        }

    }

    return gameOver;    
}

function isWin() {
    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    
    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];
        
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];
        
        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {
            return true;
        }

    }

    return false;
     
}



