document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
         
    })
    
})

function handleClick(event) {
    
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            
            if (playerTime == 1) {
                playerTime = "Cruz"
            } else {
                playerTime = "Bolinha"
            }
            alert("O jogo acabou - O vencedor foi o jogador " + playerTime);
        }, 10);
        
    };
    
    if ((countTurn0 >= 5 || countTurn1 >= 5) && !gameOver) {
        setTimeout(() => {
          alert("Deu empate!\nClique no botão abaixo e tente novamente.");
        }, 20);
      }

    updateSquare(position);
    
}

function updateSquare(position) {
        
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
    
}
    
/*function updateSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`;
        }
    })
}*/