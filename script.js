var questions = [
  {
    question: "What is 2 + 2 ",
    answers: ["A: 44", "B: 4 ", "C: 22"],
    correct: "B: 4",
  },
  {
    question: "what is a buttfor",
    answers: ["A: a tool", "B: a pickle", "C: pooping silly"],
    correct: "C: pooping silly",
  },
];

var pickQuestion;

var questionIndex = 0;

var score = 0;

// start quiz function when start button clicked
var startBtn = document.getElementById("start");
startBtn.addEventListener("click", startGame);
var startContainer = document.getElementById("start-container");
var showQuestions = document.getElementById("quiz-box");
var questionEl = document.getElementById("question");
var answerElement = document.getElementById("answers");
var timerEl = document.getElementById("display-time");
var validateAnswer = document.getElementById("CorrectIncorrect");

/// get elements by id

// display questions in quiz content

// Start game function
function startGame() {
  //hide start container
  pickQuestion = questions;
  questionIndex = 0;
  timer();
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

//add event listenter that stores answer
//resets state adds question index ++ and goes to next question
//need if statement that validates answer and moves on to the next
//store score somewhere
//set timer function
function timer() {
  var timeLeft = 90;
  var timeInterval = setInterval(function () {
    timerEl.textContent = timeLeft;
    timeLeft--;
    //need if statement if(answer false time - 10)
    if (timeLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 500);
}

// answerButton = questions.answers;
// for (i = 0; i < questions.answers.length; i++)
//   var btn = document.createElement("BUTTON");
// btn.textContent = questions.answers[i];
// btn.classList.add("qBtn");
// answerElement.appendChild(btn);
// answerButton[i];
