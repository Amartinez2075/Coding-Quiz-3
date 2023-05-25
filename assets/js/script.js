// Variables
var quizStatus = true; // Flag to indicate if the quiz is in progress
var questionNumber = 0; // Current question number
var answerNumber = 0; // Current answer number
var score = 0; // User's score
var highScore = 50; // Highest score
var finalAnswerCheck = 0; // Flag to check if the final answer has been given
var checkTimes = 1; // Number of times checked
var viewHighScoresBtnEl = document.getElementById('view-high-scores'); // View High Scores button element
var startQuizBtnEl = document.getElementById('start-quiz'); // Start Quiz button element
var answer1BtnEl = document.getElementById('answer1'); // Answer 1 button element
var answer2BtnEl = document.getElementById('answer2'); // Answer 2 button element
var answer3BtnEl = document.getElementById('answer3'); // Answer 3 button element
var answer4BtnEl = document.getElementById('answer4'); // Answer 4 button element
var submitScoreEl = document.getElementById('submitScore'); // Submit Score button element
var questionsEl = document.getElementById('questions'); // Questions element
var mainDivEl = document.getElementById('mainDiv'); // Main div element
var htmlTimeLeft = document.getElementById('timeLeft'); // HTML element for displaying time left
var answerCorrectWrong = document.getElementById('answerCorrectWrong'); // Answer correct/wrong element
var questionDisplayEl = document.createElement("questionDisplay"); // Question display element
var finalScoreDisplayEl = document.createElement("finalScoreDisplay"); // Final score display element
var enterInitialsEl = document.createElement("enterInitials"); // Enter initials element
var enterInitialsTextAreaEl = document.createElement("enterInitialsTextArea"); // Enter initials text area element
var button1234 = document.createElement("button"); // Button element
var timeLeft = 60; // Initial time left


var questions = [
  {
    title: "Which was the first 2 technologies we learned at the start of class", // Question title
    choices: ["HTML & CSS", "MYSQL & Javascript", "WhatsApp & Facebook", "Flex Columns & ChatGPT"], // Array of answer choices
    answer: "HTML & CSS" // Correct answer
  },
  {
    title: "What does HTML stand for?", // Question title
    choices: ["Hyper Text Markup Language", "High Tech Markup Language", "Home Tool Markup Language", "Hyperlinking Text Markup Language"], // Array of answer choices
    answer: "Hyper Text Markup Language" // Correct answer
  },
  {
    title: "What does CSS stand for?", // Question title
    choices: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Coded Style Sheets"], // Array of answer choices
    answer: "Cascading Style Sheets" // Correct answer
  },
  {
    title: "Which programming language is often used for client-side web development?", // Question title
    choices: ["Python", "Java", "JavaScript", "C++"], // Array of answer choices
    answer: "JavaScript" // Correct answer
  },
  {
    title: "What is the purpose of a database management system (DBMS)?", // Question title
    choices: ["To create web pages", "To manage and store data", "To design user interfaces", "To write algorithms"], // Array of answer choices
    answer: "To manage and store data" // Correct answer
  }
];

  
