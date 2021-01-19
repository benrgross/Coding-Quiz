var questions = [
  {
    question:
      "What is the HTML tag under which one can write the JavaScript code?",
    answers: ["A) <javascript>", "B) <scripted>", "C) <script>", "D) <js>"],
    correct: "C: <script>",
  },
  {
    question: "Which built-in method returns the length of the string?",
    answers: [
      "A) length()",
      "B) size()",
      "C)index()",
      "D) D - None of the above.",
    ],
    correct: "B) document.getElementById(“geek”).innerHTML=”I am a Geek”;",
  },
  {
    question:
      "Which of the following is the correct syntax to display “Hello” in an alert box?",
    answers: [
      "A. alertbox(“Hello”);",
      "B. msg(“Hello”);",
      "C. msgbox(“Hello”);",
      "D. alert(“Hello”);",
    ],
    correct: "D. alert(“Hello”);",
  },
  {
    question:
      "4. What is the correct syntax for referring to an external script called “geek.js”?",
    answers: [
      "A. <script src=”geek.js”>",
      "B. <script href=”geek.js”>",
      "C. <script ref=”geek.js”>",
      "D. <script name=”geek.js”>",
    ],
    correct: "A. <script src=”geek.js”>",
  },
];

console.log(questions[0].correct);
var pickQuestion;

var questionIndex = 1;

var score = 0;

correct = questions[questionIndex].correct;

// get elements
var startBtn = document.getElementById("start");
var startContainer = document.getElementById("start-container");
var showQuestions = document.getElementById("quiz-box");
var questionEl = document.getElementById("question");
var answerElement = document.getElementById("answers");
var timerEl = document.getElementById("display-time");
var validateAnswer = document.getElementById("CorrectIncorrect");
var initialsInput = document.querySelector('input[type="text"]');
var form = document.querySelector("form");
var scoreSubmit = document.getElementById("score-card");
var highScores = document.getElementById("highscore");
var playAgainBtn = document.getElementById("play-again");

//add event listeners
startBtn.addEventListener("click", startGame);
form.addEventListener("submit", submitHighscore);
playAgainBtn.addEventListener("click", playAgain);

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

// logs the content string of button clicked to be compares to correct string
function buttonClick(e) {
  console.log(e.target);
  var answer = e.target.innerText;
  console.log(answer);
  Validate(answer, correct);
  if (questionIndex < questions.length) {
    selectQuestion();
  } else {
    showQuestions.classList.add("hide");
    scoreSubmit.classList.remove("hide");
    // stop timer
  }
}

// resets page so new question card can be shown.
function resetState() {
  while (answerElement.firstChild) {
    answerElement.removeChild(answerElement.firstChild);
  }
}

//compares answer to correct answer and adds score and goes to next question or stops game
function Validate(answer, correct) {
  correct = "";
  correct = questions.correct;
  console.log(correct);
  if (answer == correct) {
    score++;
    console.log(score);
  }
  // else {
  //   timeLeft - 5;
  // }
}

//set timer function
function timer() {
  var timeLeft = 90;
  var timeInterval = setInterval(function () {
    timerEl.textContent = timeLeft;
    timeLeft--;
    //need if statement if(answer false time - 10)
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      showQuestions.classList.add("hide");
      scoreSubmit.classList.remove("hide");
    }
  }, 500);
}

//record initials from form and trigger next event
function submitHighscore(e) {
  e.preventDefault();
  //get input value
  var logInitials = document.getElementById("initials").value;
  // create new li element
  var li = document.createElement("li");
  li.className = "score-item";
  console.log(li);
  // add text node with input value
  li.appendChild(document.createTextNode(logInitials));
  highScores.appendChild(li);
  scoreSubmit.classList.add("hide");
  highScores.classList.remove("hide");
}

function playAgain(e) {
  highScores.classList.add("hide");
  startContainer.classList.remove("hide");
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
