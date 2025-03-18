const express = require('express');
const router = express.Router();

// In-memory storage for user's progress and score
let userProgress = {
  currentQuestionIndex: 0,
  score: 0,
};

// GET /quiz: Start the quiz and display the first question
router.get('/', (req, res) => {
  const { triviaQuestions } = req.app.locals;
  const { currentQuestionIndex } = userProgress;

  if (currentQuestionIndex >= triviaQuestions.length) {
    // Redirect to score page if all questions are answered
    return res.redirect('/quiz/score');
  }

  const currentQuestion = triviaQuestions[currentQuestionIndex];
  res.send(`
    <h1>Trivia Quiz</h1>
    <p>Question ${currentQuestionIndex + 1}: ${currentQuestion.question}</p>
    <form action="/quiz" method="POST">
      <input type="text" name="answer" placeholder="Your answer" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

// POST /quiz: Submit an answer to the current question and move to the next question
router.post('/', (req, res) => {
  const { triviaQuestions } = req.app.locals;
  const { currentQuestionIndex } = userProgress;
  const userAnswer = req.body.answer.trim().toLowerCase();
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer.toLowerCase();

  // Check if the answer is correct
  if (userAnswer === correctAnswer) {
    userProgress.score++;
    res.send(`
      <h1>Correct!</h1>
      <p>You earned a point.</p>
      <a href="/quiz">Next Question</a>
    `);
  } else {
    res.send(`
      <h1>Incorrect!</h1>
      <p>The correct answer was: ${triviaQuestions[currentQuestionIndex].answer}.</p>
      <a href="/quiz">Next Question</a>
    `);
  }

  // Move to the next question
  userProgress.currentQuestionIndex++;
});

// GET /quiz/score: Display the user’s final score at the end of the quiz
router.get('/score', (req, res) => {
  const { score } = userProgress;
  const totalQuestions = req.app.locals.triviaQuestions.length;

  // Reset user progress for a new game
  userProgress = { currentQuestionIndex: 0, score: 0 };

  res.send(`
    <h1>Quiz Completed!</h1>
    <p>Your final score is: ${score}/${totalQuestions}</p>
    <a href="/quiz">Start Again</a>
  `);
});

module.exports = router;