
const express = require('express');
const bodyParser = require('body-parser');
const quizRouter = require('./routes/quiz');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

// Middleware to make triviaQuestions accessible in routes
app.locals.triviaQuestions = triviaQuestions;

app.use('/quiz', quizRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});