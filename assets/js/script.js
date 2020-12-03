var question = document.querySelector("#question");
var choiceCont = document.querySelector("#choice-container");
var progressText = document.querySelector("#progressText");
var scoreText = document.querySelector("#score");

let currentIndex = 0;
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0
let availableQuestions =[];

let questions =[
    {
        question: "What language is used to mark-up webpages?",
        choices: ["HTML", "CSS", "Javascript", "SQL"],
        answer: "HTML"
    },
    {
        question: "What language is used to mark-up webpages?",
        choices: ["HTML", "CSS", "Javascript", "SQL"],
        answer: "HTML"
    },
    {
        question: "What language is used to mark-up webpages?",
        choices: ["HTML", "CSS", "Javascript", "SQL"],
        answer: "HTML"
    },
    {
        question: "What language is used to mark-up webpages?",
        choices: ["HTML", "CSS", "Javascript", "SQL"],
        answer: "HTML"
    },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

startGame = () => {
    // questionCounter = 0
    // score = 0
    // availableQuestions = [...questions]
    getNewQuestion()
};

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

function checkQuestion(){};

//increment current question ++

// //- When you store the high scores you will want to use JSON stringify
// - do the timer
// - when you press start quiz start a timer right away,
// - change on click linke 56 do a "checker" you can use if this value != to the choice = wrong


incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()