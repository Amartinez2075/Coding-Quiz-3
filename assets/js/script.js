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

// Do not display anything that is not ready to be displayed
answer1BtnEl.style.display = 'none';
answer2BtnEl.style.display = 'none';
answer3BtnEl.style.display = 'none';
answer4BtnEl.style.display = 'none';
submitScoreEl.style.display = 'none';
answerCorrectWrong.style.display='none';
enterInitialsTextArea.style.display='none';

var questionsObject = { // Object that holds correct answers.
  correct: { 
      0 : "Which was the first 2 technologies we learned at the start of class",
      1 : "What does HTML stand for?",
      2 : "What does CSS stand for?", // Button #4 for 
      3 : "Which programming language is often used for client-side web development?", // Button #3
      4 : "What is the purpose of a database management system (DBMS)?"
  }
};

// Object that holds the questions and answers
var answersObject = {
  answers: {
    0: {
      0: "HTML & CSS", // Button #1 (Pick this one)
      1: "MYSQL & Javascript", // Button #2
      2: "WhatsApp & Facebook", // Button #3
      3: "Flex Columns & ChatGPT" // Button #4
    },
    1: {
      0: "Hyper Text Markup Language", // Button #1 (Pick this one)
      1: "High Tech Markup Language", // Button #2
      2: "Home Tool Markup Language", // Button #3
      3: "Hyperlinking Text Markup Language" // Button #4
    },
    2: {
      0: "Cascading Style Sheets", // Button #1 (Pick this one)
      1: "Computer Style Sheets", // Button #2
      2: "Creative Style Sheets", // Button #3
      3: "Coded Style Sheets" // Button #4 
    },
    3: {
      0: "Python", // Button #1
      1: "Java", // Button #2
      2: "JavaScript", // Button #3 (Pick this one)
      3: "C++" // Button #4
    },
    4: {
      0: "To create web pages", // Button #1
      1: "To manage and store data", // Button #2 (Pick this one)
      2: "To design user interfaces", // Button #3
      3: "To write algorithms" // Button #4
    }
  }
};

//Initialize the display timer at default value
htmlTimeLeft.textContent = timeLeft;

viewHighScoresBtnEl.addEventListener("click", function() { // View high scores

    var quizUsers = "";
    var substringTest ="";
    var highScores = "";

    for (var i=0; i < localStorage.length; i++) {
        var checkUserValue = [];
        
        quizUsers = localStorage.getItem(localStorage.key(i));
        substringTest = quizUsers.substring(0,4) 
        if (substringTest == "quiz") {
            checkUserValue = quizUsers.split(",");
            var userName = checkUserValue[0]
            highScores += "User " + userName.substring(4) + " high score is: " + checkUserValue[1] + "\n";
       }
    }
    window.alert(highScores);

});

submitScoreEl.addEventListener("click", function() { 
    

  var quizLocalStorage = "quiz";
  var quizUserDetails = "";
  var value = [];
  

  quizUserDetails = quizLocalStorage + enterInitialsTextArea.value 
  value = [quizUserDetails,highScore] 


  if (!localStorage.length) {
      localStorage.setItem("test","test");
  }

  for (var i=0; i < localStorage.length; i++){
        
    var checkUser = "";
    var checkUserValue = [];


    quizUserDetails = quizLocalStorage + enterInitialsTextArea.value;


    checkUser = localStorage.getItem(quizUserDetails);

    if (checkUser == null) { 
        localStorage.setItem(quizUserDetails, value); 
        window.alert("Your score of " + highScore + " has been submitted!")
        break;
    } else if (checkUser != null){
        checkUserValue = checkUser.split(","); 
       
    
    }