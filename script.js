//make variables for 
// number of questions answered
var questionsAnswered = 0

// timer 
var time = 0

// score
var score = 0

// array with questions 
var questions = [
    {
        question:  "what is 1  + 2?",
        a: "22",
        b: "31",
        c: "2",
        d: "3",
        answer: "d"

    },
    {
        question: "what is my age",
        a: "28",
        b: "30",
        c: "23",
        d: "31",
        answer: "b"

    },
    {
        question: "what is a pickle",
        a: "dog",
        b: "button",
        c: "cucumber",
        d: "alien poop",
        answer: "c"

    }
]
// start quiz function when start button clicked 
var statBtn = document.querySelector("#start")
startBtn.addEventlistener("click", quiz)
startBtn.addEventlistener
/// get elements by id 
var quizQuestion = document.querySelector("#quiz-content")
var timeLeft = document.querySelector("#display-time")
var scoreCard = document.querySelector("#your-score")
var correctIncorrect = document.querySelector("#correct-incorrect")

// display questions in quiz content 

// function to choose question 

function quiz() 

