//make variables for
// number of questions answered
var questionsAnswered = 0;

// timer
var time = 0;

// score
var score = 0;

// array with questions

console.log(questions[a];

var questions = [
  {
    question: "what is 1  + 2?",
    a: "22",
    b: "31",
    c: "2",
    d: "3",
    answer: "d",
  },
  {
    question: "what is my age",
    a: "28",
    b: "30",
    c: "23",
    d: "31",
    answer: "b",
  },
  {
    question: "what is a pickle",
    a: "dog",
    b: "button",
    c: "cucumber",
    d: "alien poop",
    answer: "c",
  },
];

var questionPool = [];

var i = 0;

// start quiz function when start button clicked
var statBtn = document.querySelector("#start");
startBtn.addEventListener("click", startGame);

/// get elements by id
var quizQuestion = document.querySelector("#quiz-content");
var timeLeft = document.querySelector("#display-time");
var scoreCard = document.querySelector("#your-score");
var correctIncorrect = document.querySelector("#correct-incorrect");

// display questions in quiz content

// Start game function
function startGame() {
  //reset variable
  questionsAnswered = 0;
  score = 0;
  questionPool = [...questions];
  //call next function
  getQuestion();
}

//function to pull question out of array and put it into question box
function getQuestion() {
  // make condition - if questions answered is if ()

  for (i = 0; i < questions.length; i++) {
    questions[i];
  }
}

console.log(question[0].question[question]);

// the function
// 1 pull question out of array
// // add question to header
// add a --> button a
// add b --> button b
// add c --> button c

//questions do i create the buttons on the html page or do i create the buttons with javascript?

var questionA = qistion;
