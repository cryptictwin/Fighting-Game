function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x 
        && rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width
        && rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y
        && rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    )
}

function determineWinner({ player1, player2, timerId }) {
    clearTimeout(timerId);
    document.getElementById('displayText').style.display = 'flex'
        if (player1.health === player2.health) {
            document.getElementById('displayText').innerText = 'It\'s a tie!';
        } else if (player1.health > player2.health) {
            document.getElementById('displayText').innerText = 'Player 1 wins!';
        } else if (player1.health < player2.health) {
            document.getElementById('displayText').innerText = 'Player 2 wins!';
        }
}

let timer = 10
let timerId
function decreaseTimer() {
    if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000)
        timer--;
        document.getElementById('timer').innerText = timer;
    }
    
    if (timer === 0) {
        determineWinner({ player1, player2 });
    }
}