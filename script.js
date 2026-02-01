let score = 0;
let time = 120; // 2 minutes

const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';

    heart.style.left = Math.random() * (gameArea.offsetWidth - 50) + 'px';
    heart.style.top = gameArea.offsetHeight + 'px';

    heart.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        heart.remove();
    });

    gameArea.appendChild(heart);

    setTimeout(() => {
        if (heart.parentElement) heart.remove();
    }, 4000);
}

function startGame() {
    const heartInterval = setInterval(createHeart, 800);

    const timerInterval = setInterval(() => {
        time--;
        timerDisplay.textContent = `Time: ${time}s`;
        if (time <= 0) {
            clearInterval(heartInterval);
            clearInterval(timerInterval);
            alert(`Game over! Your score: ${score} ❤️\nI hope this made you smile!`);
        }
    }, 1000);
}

startGame();