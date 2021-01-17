var questions = [ {
    question: "What is  5 + 5 ?" ,
        answers: [
            {text: "4", correct: true},
            {text: "95", correct: false}
            {text: "30", correct: false},
            {text: "45", correct:false}
        ]
}
]


var questionPool = [];

var i = 0;

// start quiz function when start button clicked
var startBtn = document.getElementById("start");
startBtn.addEventListener("click", startGame);
var startContainer = document.getElementById("start-container");
var showQuestions = document.getElementById("quiz-box");

/// get elements by id

// display questions in quiz content

// Start game function
function startGame() {
  //hide start container
  startContainer.classList.add("hide");
  //show question container
  showQuestions.classList.remove("hide");
  selectQuestion ()
}

function selectQuestion()