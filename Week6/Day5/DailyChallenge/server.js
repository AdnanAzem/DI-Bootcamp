const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🚗', name: 'Car' },
    { emoji: '📚', name: 'Books' },
    { emoji: '🎸', name: 'Guitar' },
    { emoji: '🌍', name: 'Earth' },
    { emoji: '🍦', name: 'Ice Cream' },
    { emoji: '🎮', name: 'Video Game' },
];

let leaderboard = [];

// Function to get a random emoji and options
function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const correctEmoji = emojis[randomIndex];
    const options = [correctEmoji.name];

    // Add 3 random incorrect options
    while (options.length < 4) {
        const randomOption = emojis[Math.floor(Math.random() * emojis.length)].name;
        if (!options.includes(randomOption)) {
            options.push(randomOption);
        }
    }

    // Shuffle options
    options.sort(() => Math.random() - 0.5);

    return {
        emoji: correctEmoji.emoji,
        options: options,
        correctAnswer: correctEmoji.name,
    };
}

// Endpoint to get a new emoji and options
app.get('/emoji', (req, res) => {
    const emojiData = getRandomEmoji();
    res.json(emojiData);
});

// Endpoint to submit a guess
app.post('/guess', (req, res) => {
    const { guess, correctAnswer, playerName } = req.body;
    const isCorrect = guess === correctAnswer;

    // Update leaderboard if the guess is correct
    if (isCorrect) {
        const playerIndex = leaderboard.findIndex((entry) => entry.name === playerName);
        if (playerIndex !== -1) {
            leaderboard[playerIndex].score += 1;
        } else {
            leaderboard.push({ name: playerName, score: 1 });
        }
    }

    res.json({ isCorrect, leaderboard });
});

// Endpoint to get the leaderboard
app.get('/leaderboard', (req, res) => {
    res.json(leaderboard);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});