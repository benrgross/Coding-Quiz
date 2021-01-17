var questions = [
  {
    question: "What am i doing? ",
    answers: ["A: I love it", "B: I dont love it ", "C: Eat shit"],
    correct: "C",
  },
  {
    question: "I really am not sure?",
    answers: ["A: I love it", "B: I dont love it ", "C: Eat shit"],
    correct: "C",
  },
];

var questionPool = [];

var pickQuestion;

var questionIndex = 0;

// start quiz function when start button clicked
var startBtn = document.getElementById("start");
startBtn.addEventListener("click", startGame);
var startContainer = document.getElementById("start-container");
var showQuestions = document.getElementById("quiz-box");
var questionEl = document.getElementById("question");
var answerElement = document.getElementById("answers");

/// get elements by id

// display questions in quiz content

// Start game function
function startGame() {
  //hide start container
  pickQuestion = questions;
  questionIndex = 0;
  startContainer.classList.add("hide");
  //show question container
  showQuestions.classList.remove("hide");
  selectQuestion();
}

//function to select question from the array
function selectQuestion() {
  displayQuestions(pickQuestion[questionIndex]);
  // make loop for selecting questions from array ?
  displayQuestions();
}

//function to show questions and answers as buttons in page
function displayQuestions(questions) {
  questionEl.innerText = questions.question;
  for (i = 0; i < questions.answers.length; i++) {
    var btn = document.createElement("BUTTON");
    btn.textContent = questions.answers[i];
    btn.classList.add("qBtn");
    answerElement.appendChild(btn);
  }
}

console.log(answerElement);

console.log(questionEl);

console.log(answers);

// answerButton = questions.answers;
// for (i = 0; i < questions.answers.length; i++)
//   var btn = document.createElement("BUTTON");
// btn.textContent = questions.answers[i];
// btn.classList.add("qBtn");
// answerElement.appendChild(btn);
// answerButton[i];
