var quizStatus = true; 
var questionNumber = 0; 
var answerNumber = 0; 
var score = 0; 
var highScore = 50; 
var finalAnswerCheck = 0 
var checkTimes = 1 
var viewHighScoresBtnEl = document.getElementById('view-high-scores'); 
var startQuizBtnEl = document.getElementById('start-quiz'); 
var answer1BtnEl = document.getElementById('answer1'); 
var answer2BtnEl = document.getElementById('answer2'); 
var answer3BtnEl = document.getElementById('answer3'); 
var answer4BtnEl = document.getElementById('answer4'); 
var submitScoreEl = document.getElementById('submitScore'); 
var questionsEl = document.getElementById('questions'); q
var mainDivEl = document.getElementById('mainDiv'); 
var htmlTimeLeft = document.getElementById('timeLeft');
var answerCorrectWrong = document.getElementById('answerCorrectWrong'); 
var questionDisplayEl = document.createElement("questionDisplay"); 
var finalScoreDisplayEl = document.createElement("finalScoreDisplay"); 
var enterInitialsEl = document.createElement("enterInitials");
var enterInitialsTextAreaEl = document.createElement("enterInitialsTextArea"); 
var button1234 = document.createElement("button"); 
var timeLeft = 60; 


var questions = [
    {
      title: "Which was the first 2 technologies we learned at the start of class",
      choices: ["HTML & CSS", "MYSQL & Javascript", "WhatsApp & Facebook", "Flex Columns & ChatGPT"],
      answer: "HTML & CSS"
    },
    {
      title: "What does HTML stand for?",
      choices: ["Hyper Text Markup Language", "High Tech Markup Language", "Home Tool Markup Language", "Hyperlinking Text Markup Language"],
      answer: "Hyper Text Markup Language"
    },
    {
      title: "What does CSS stand for?",
      choices: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Coded Style Sheets"],
      answer: "Cascading Style Sheets"
    },
    {
      title: "Which programming language is often used for client-side web development?",
      choices: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript"
    },
    {
      title: "What is the purpose of a database management system (DBMS)?",
      choices: ["To create web pages", "To manage and store data", "To design user interfaces", "To write algorithms"],
      answer: "To manage and store data"
    }
  ];
  
