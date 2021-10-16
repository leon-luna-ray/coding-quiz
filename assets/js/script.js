// Game variables
var question = document.querySelector('#question');
var choiceCont = document.querySelector('#choice-container');
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');

let currentIndex = 0;
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const SCORE_POINTS = 10;
const MAX_QUESTIONS = 4;

// Start game function
const startGame = () => {
  let questionCounter = 0;
  let score = 0;
  const availableQuestions = [...questions];
  getNewQuestion();
};

// Function to get and display the question in the array
const getNewQuestion = () => {
  var currentQuestion = questions[currentIndex];
  var question = document.getElementById('question');
  question.textContent = currentQuestion.question;

  currentQuestion.choices.forEach(function (choice, i) {
    var createButton = document.createElement('button');
    createButton.setAttribute('class', 'answer-button');
    createButton.setAttribute('value', choice);
    createButton.textContent = i + 1 + '.' + choice;
    createButton.onclick = checkQuestion;
    choiceCont.append(createButton);
  });
};

// Check if the question was correct
function checkQuestion() {}

const incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
