var questions = [
  {
    question: "What is 2 + 2 ",
    answers: ["A: 44", "B: 4 ", "C: 22"],
    correct: "B: 4",
  },
  {
    question: "what is a buttfor?",
    answers: ["A: a tool", "B: a pickle", "C: pooping silly"],
    correct: "C: pooping silly",
  },
];

console.log(questions[0].correct);
var pickQuestion;

var questionIndex = 1;

var score = 0;

correct = questions[questionIndex].correct;

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
  questionIndex = 0;
  timer();
  startContainer.classList.add("hide");
  //show question container
  showQuestions.classList.remove("hide");
  selectQuestion();
}

//function to select question from the array
function selectQuestion() {
  resetState();
  displayQuestions(questions[questionIndex]);
  questionIndex++;
  // make loop for selecting questions from array ?
  displayQuestions();
}

//function to show questions and answers as buttons in page
function displayQuestions(questions) {
  questionEl.innerText = questions.question;
  for (i = 0; i < questions.answers.length; i++) {
    var qBtn = document.createElement("button");
    qBtn.textContent = questions.answers[i];
    qBtn.classList.add("qBtn");
    answerElement.appendChild(qBtn);
    qBtn.addEventListener("click", buttonClick);
  }
}

function buttonClick(e) {
  console.log(e.target);
  var answer = e.target.innerText;
  console.log(answer);
  Validate(answer, correct);
  if (questionIndex < questions.length) {
    selectQuestion();
  }
}

function resetState() {
  while (answerElement.firstChild) {
    answerElement.removeChild(answerElement.firstChild);
  }
}

function Validate(answer, correct) {
  correct = "";
  correct = questions.correct;
  console.log(correct);
  if (answer == correct) {
    score++;
    console.log(score);
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

// qBtn.addEventListener("click", function (answer, correct) {
//   qBtn.innerText = answer;
//   questions.correct.innerText = correct;
//   if (answer === correct) {
//     validateAnswer.textContent = "Correct!";
//     score++;
//     nextQuestion();
//   } else {
//     validateAnswer.textContent = "Incorrect!";
//     timeLeft = timeLeft - 10;
//     nextQuestion()\
