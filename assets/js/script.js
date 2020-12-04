// Game variables
var question = document.querySelector("#question");
var choiceCont = document.querySelector("#choice-container");
var progressText = document.querySelector("#progressText");
var scoreText = document.querySelector("#score");

let currentIndex = 0;
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions =[];

// Questions array
let questions =[
    {
        question: "Which language is used to mark-up webpages?",
        choices: ["HTML", "CSS", "Javascript", "SQL"],
        answer: "HTML"
    },
    {
        question: "Which of these is a CSS framework?",
        choices: ["Sass", "jQuery", "Bootstrap", "Ruby"],
        answer: "Bootstrap"
    },
    {
        question: "Which type of brackets are used in a Javascript array?",
        choices: ["()", "{}", "<>", "[]"],
        answer: "[]"
    },
    {
        question: "whatIsThisCalled?",
        choices: ["Camel case", "A function", "Javascript", "Bad grammar"],
        answer: "Camel case"
    },
];

const SCORE_POINTS = 10;
const MAX_QUESTIONS = 4;

// Start game function
startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
};

// Function to get and display the question in the array
getNewQuestion = () => {
    var currentQuestion = questions[currentIndex]
    var question = document.getElementById("question")
    question.textContent = currentQuestion.question

    currentQuestion.choices.forEach(function(choice, i){
        var createButton = document.createElement("button")
        createButton.setAttribute("class", "answer-button")
        createButton.setAttribute("value", choice)
        createButton.textContent = i + 1 + "." + choice;
        createButton.onclick = checkQuestion;
        choiceCont.append(createButton);
    })
};

// Check if the question was correct
function checkQuestion(){};


incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()