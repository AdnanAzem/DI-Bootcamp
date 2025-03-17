let playerName = prompt("Enter your name:");
let score = 0;

// Fetch a new emoji and options
async function fetchEmoji() {
    const response = await fetch('/emoji');
    const data = await response.json();
    return data;
}

// Display the emoji and options
async function displayEmoji() {
    const emojiData = await fetchEmoji();
    document.getElementById('emoji').textContent = emojiData.emoji;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    emojiData.options.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => submitGuess(option, emojiData.correctAnswer);
        optionsDiv.appendChild(button);
    });
}

// Submit the player's guess
async function submitGuess(guess, correctAnswer) {
    const response = await fetch('/guess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guess, correctAnswer, playerName }),
    });
    const result = await response.json();
    const feedbackDiv = document.getElementById('feedback');
    if (result.isCorrect) {
        feedbackDiv.textContent = 'Correct! 🎉';
        score += 1;
    } else {
        feedbackDiv.textContent = 'Incorrect! 😢';
    }
    updateLeaderboard(result.leaderboard);
    displayEmoji();
}

// Update the leaderboard
function updateLeaderboard(leaderboard) {
    const leaderboardUl = document.getElementById('leaderboard');
    leaderboardUl.innerHTML = '';
    leaderboard.sort((a, b) => b.score - a.score).forEach((entry) => {
        const li = document.createElement('li');
        li.textContent = `${entry.name}: ${entry.score}`;
        leaderboardUl.appendChild(li);
    });
}

displayEmoji();