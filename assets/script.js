// questions answers and correct answer stored in objects
var questions = [
  {
    question:
      "What is the HTML tag under which one can write the JavaScript code?",
    answers: ["A) <javascript>", "B) <scripted>", "C) <script>", "D) <js>"],
    correct: "C) <script>",
  },
  {
    question: "Which built-in method returns the length of the string?",
    answers: [
      "A) length()",
      "B) size()",
      "C) index()",
      "D) D - None of the above.",
    ],
    correct: "A) length()",
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

// my variables

var pickQuestion;

var questionIndex = 0;

var score = 0;

var timeLeft = 90;

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
var checkScore = document.getElementById("link-score");
var storeInitials = document.getElementById("initials");
var scoreListElement = document.getElementById("score-list");
var highScoreButton = document.getElementById("scoreBtn");
var clearScoresEl = document.getElementById("clear-scores");

//add event listeners
startBtn.addEventListener("click", startGame);
form.addEventListener("submit", handleNewScore);
playAgainBtn.addEventListener("click", playAgain);
checkScore.addEventListener("click", showScore);
highScoreButton.addEventListener("click", showScore);
clearScoresEl.addEventListener("click", clearScores);

// Start game function
function startGame() {
  //hide start container
  timeLeft = 75;
  questionIndex = 0;
  timer();
  score = 0;
  startContainer.classList.add("hide");
  //show question container
  showQuestions.classList.remove("hide");
  selectQuestion();
}

//function to select question from the array
function selectQuestion() {
  resetState();
  displayQuestions(questionIndex);
}

//function to show questions and answers as buttons in page
function displayQuestions(questionIndex) {
  if (questionIndex < questions.length) {
    var currentQuestion = questions[questionIndex];
    questionEl.innerText = currentQuestion.question;
    for (i = 0; i < currentQuestion.answers.length; i++) {
      var qBtn = document.createElement("button");
      qBtn.textContent = currentQuestion.answers[i];
      qBtn.classList.add("qBtn");
      answerElement.appendChild(qBtn);
      qBtn.addEventListener("click", buttonClick);
    }
  } else {
    showQuestions.classList.add("hide");
    scoreSubmit.classList.remove("hide");
    document.getElementById("your-score").textContent =
      "Your Score is " + score + "pts";
  }
}

// logs the content string of button clicked to be compares to correct string
function buttonClick(e) {
  var userPickedAnswer = e.target.innerText;
  var correctAnswer = questions[questionIndex].correct;

  if (userPickedAnswer == correctAnswer) {
    score = score + 100;
    questionIndex++;
    Correct();
  } else {
    if (userPickedAnswer != correctAnswer) {
      timeLeft = timeLeft - 10;
    }
    questionIndex++;
    Incorrect();
  }
  selectQuestion();
}

// resets page so new question card can be shown.
function resetState() {
  while (answerElement.firstChild) {
    answerElement.removeChild(answerElement.firstChild);
  }
}

//set timer function

function timer() {
  var timeInterval = setInterval(function () {
    if (timeLeft <= 90) {
      timeLeft--;
      timerEl.textContent = timeLeft;
    }
    if (questionIndex >= 4) {
      clearInterval(timeInterval);
    }
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      showQuestions.classList.add("hide");
      scoreSubmit.classList.remove("hide");
    }
  }, 500);
}

// play again function
function playAgain(e) {
  highScores.classList.add("hide");
  startContainer.classList.remove("hide");
}

// displays correct on page when correct answer chosen and disappears after 1500ms
function Correct() {
  if (questionIndex >= 1 && questionIndex <= 5) {
    document.getElementById("correctIncorrect").innerHTML = "Correct!";
    setTimeout(function () {
      document.getElementById("correctIncorrect").innerHTML = "";
    }, 1500);
  }
  if (questionIndex === 4) {
    console.log(questionIndex);
    document.getElementById("correct-incorrect").innerHTML = "Correct!";
    setTimeout(function () {
      document.getElementById("correct-incorrect").innerHTML = "";
    }, 1500);
  }
}

// displays incorrect on page when incorrect answer chosen and disappears after 1500ms
function Incorrect() {
  if (questionIndex >= 1 && questionIndex <= 5) {
    console.log(questionIndex);
    document.getElementById("correctIncorrect").innerHTML = "Incorrect!";
    setTimeout(function () {
      document.getElementById("correctIncorrect").innerHTML = "";
    }, 1500);
  }
  if (questionIndex === 4) {
    console.log(questionIndex);
    document.getElementById("correct-incorrect").innerHTML = "Incorrect!";
    setTimeout(function () {
      document.getElementById("correct-incorrect").innerHTML = "";
    }, 1500);
  }
}

// empty array for storing scores
storeScores = [];

// function to retrieve scores from local storage
function getScore() {
  if (localStorage.getItem("scores")) {
    for (i = 0; i < storeScores.length; i++) {
      initials = JSON.parse(localStorage.getItem("scores"));
      score = JSON.parse(localStorage.getItem("scores")).score;
    }
    // scores = JSON.parse(localStorage.getItem("score")
    console.log("score", score);
    console.log("initals", initials);
    renderScores();
  }
}

// function to render the scores from the local storage onto high score list
function renderScores() {
  // clear out the old scores
  scoreListElement.textContent = "";
  // go through the scores
  storeScores.forEach(function (storeScore, i) {
    // create a list item
    var listItem = document.createElement("li");
    listItem.textContent =
      storeScore.initials + "-----" + storeScore.score + "pts";
    listItem.classList.add("score-item");
    scoreListElement.appendChild(listItem);
  });
}

// function that stores the score along with the submitted initials in an object
function handleNewScore(event) {
  // keep the page from reloading
  event.preventDefault();

  var storeScore = {
    initials: storeInitials.value,
    score: score,
  };
  storeScores.push(storeScore);
  localStorage.setItem("scores", JSON.stringify(storeScores));
  storeInitials.value = "";
  scoreSubmit.classList.add("hide");
  highScores.classList.remove("hide");
  getScore();
}

// function that switches to high score card and displays high score list when high score button pressed
function showScore() {
  highScores.classList.remove("hide");
  startContainer.classList.add("hide");
  scoreSubmit.classList.add("hide");
  showQuestions.classList.add("hide");
  console.log(score);
  renderScores();
}

// function that puts stored initials and scores in empty storeScore array when page is loaded
function init() {
  if (localStorage.getItem("scores")) {
    storeScores = JSON.parse(localStorage.getItem("scores"));
    console.log(storeScores);
  }
}
init();

function clearScores() {
  localStorage.removeItem("scores");
  location.reload();
}
