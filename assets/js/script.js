var quizStatus = true; // Know the status of the quiz. Quiz is not running = false, running = true
var questionNumber = 0; // Track the question answered.
var answerNumber = 0; // Track next answers to show
var score = 0; // Max value by decreasing each wrong answer
var highScore = 50; // Score add fix for ticking timer.
var finalAnswerCheck = 0; // If last answer was wrong it will be validated outside of the time interval and then display as enabled = 1 
var checkTimes = 1; // Check timer times call for function on last question
var viewHighScoresBtnEl = document.getElementById('view-high-scores'); // View High Scores Btn El
var startQuizBtnEl = document.getElementById('start-quiz'); // Start Quiz button Btn El
var answer1BtnEl = document.getElementById('answer1'); // Start Quiz button Btn El
var answer2BtnEl = document.getElementById('answer2'); // Start Quiz button Btn El
var answer3BtnEl = document.getElementById('answer3'); // Start Quiz button Btn El
var answer4BtnEl = document.getElementById('answer4'); // Start Quiz button Btn El
var submitScoreEl = document.getElementById('submitScore'); // Start Quiz button Btn El
var questionsEl = document.getElementById('questions'); // Questions for the main Div
var mainDivEl = document.getElementById('mainDiv'); // Main div container for all elements except for header elements
var htmlTimeLeft = document.getElementById('timeLeft'); // Display counter @ the html level.
var answerCorrectWrong = document.getElementById('answerCorrectWrong'); // Display counter @ the html level.
var questionDisplayEl = document.createElement("div"); // Display Question
var finalScoreDisplayEl = document.createElement("div"); // Display Question
var enterInitialsEl = document.createElement("div"); // Enter initials
var enterInitialsTextAreaEl = document.createElement("textarea"); // TextArea
var button1234 = document.createElement("button"); // Test answer 1
var timeLeft = 60; // Global time left assignment counter

// Do not display anything that is not ready to be displayed
answer1BtnEl.style.display = 'none';
answer2BtnEl.style.display = 'none';
answer3BtnEl.style.display = 'none';
answer4BtnEl.style.display = 'none';
submitScoreEl.style.display = 'none';
answerCorrectWrong.style.display = 'none';
enterInitialsTextAreaEl.style.display = 'none';

var questionsObject = {
  correct: {
    0: "Which were the first 2 technologies we learned at the start of class",
    1: "What does HTML stand for?",
    2: "What does CSS stand for?",
    3: "Which programming language is often used for client-side web development?",
    4: "What is the purpose of a database management system (DBMS)?"
  }
};

var answersObject = {
  answers: {
    0: {
      0: "HTML & CSS",
      1: "MYSQL & Javascript",
      2: "WhatsApp & Facebook",
      3: "Flex Columns & ChatGPT"
    },
    1: {
      0: "Hyper Text Markup Language",
      1: "High Tech Markup Language",
      2: "Home Tool Markup Language",
      3: "Hyperlinking Text Markup Language"
    },
    2: {
      0: "Cascading Style Sheets",
      1: "Computer Style Sheets",
      2: "Creative Style Sheets",
      3: "Coded Style Sheets"
    },
    3: {
      0: "Python",
      1: "Java",
      2: "JavaScript",
      3: "C++"
    },
    4: {
      0: "To create web pages",
      1: "To manage and store data",
      2: "To design user interfaces",
      3: "To write algorithms"
    }
  }
};

//Initialize the display timer at default value
htmlTimeLeft.textContent = timeLeft;

viewHighScoresBtnEl.addEventListener("click", function() { // View high scores
  var quizUsers = "";
  var substringTest = "";
  var highScores = "";

  for (var i = 0; i < localStorage.length; i++) {
    var checkUserValue = [];
    quizUsers = localStorage.getItem(localStorage.key(i));
    substringTest = quizUsers.substring(0, 4);
    if (substringTest === "quiz") {
      checkUserValue = quizUsers.split(",");
      var userName = checkUserValue[0];
      highScores += "User " + userName.substring(4) + " high score is: " + checkUserValue[1] + "\n";
    }
  }
  window.alert(highScores);
});

//Lines 1-99 Are correct and working

submitScoreEl.addEventListener("click", function() { // Submit high scores
    var quizLocalStorage = "quiz";
    var quizUserDetails = "";
    var value = [];
    
    // If good input, the value will be assigned properly.
    quizUserDetails = quizLocalStorage + enterInitialsTextAreaEl.value;
    value = [quizUserDetails, highScore]; // Create an array for validation
  
    // Add a test entry to the local storage in order to be able to get the length of the local storage.
    // If the user clears the data at local storage, the below code will not work unless there is at least one entry.
    if (!localStorage.length) {
      localStorage.setItem("test", "test");
    }
      
    for (var i = 0; i < localStorage.length; i++) {
      var checkUser = "";
      var checkUserValue = [];
  
      // Assign value again
      quizUserDetails = quizLocalStorage + enterInitialsTextAreaEl.value;
  
      // Check if assigned value exists in the local storage
      checkUser = localStorage.getItem(quizUserDetails);
      // quizInitial + score will be checked against the input from the user to validate if it already exists in the local storage
  
      if (checkUser === null) { // New user, no need to split
        localStorage.setItem(quizUserDetails, value.join(",")); // Value is equal to 
        window.alert("Your score of " + highScore + " has been submitted!");
        break;
      } else if (checkUser !== null) {
        checkUserValue = checkUser.split(","); // Split since the object exists in local storage
      }
  
      if (quizUserDetails === checkUserValue[0] && highScore === parseInt(checkUserValue[1])) {
        // Only insert if the current highScore is higher, 
        // otherwise let the user know they had a higher score already
        localStorage.setItem(quizUserDetails, value.join(",")); // Value is equal to 
        window.alert(highScore + " is the latest entry for user initial " + enterInitialsTextAreaEl.value + ". Entry will not be added.");
        break;
      } else if (enterInitialsTextAreaEl.value === "") {
        window.alert("Please enter an initial");
        break;
      } else if (quizUserDetails === checkUserValue[0] && highScore > parseInt(checkUserValue[1])) {
        // New high score submitted!
        localStorage.setItem(quizUserDetails, value.join(",")); // Value is equal to 
        window.alert("New high score of " + highScore + " has been submitted!.\nYour previous score was " + checkUserValue[1]);
        break;
      } else if (quizUserDetails === checkUserValue[0] && highScore < parseInt(checkUserValue[1])) {
        // Your previous score was higher!
        localStorage.setItem(quizUserDetails, value.join(",")); // Value is equal to 
        window.alert("Your previous score of " + checkUserValue[1] + " was higher. Entry will not be added.");
        break;
      } else { // New entry altogether
        localStorage.setItem(quizUserDetails, value.join(",")); // Value is equal to 
        window.alert("Your score of " + highScore + " has been submitted!");
        break;
      }
    }
  });

//Lines between 102-162 are correct and working  

submitScoreEl.addEventListener("click", function() { // Submit high scores
    var quizLocalStorage = "quiz";
    var quizUserDetails = "";
    var value = [];
    
    // If good input, the value will be assigned properly.
    quizUserDetails = quizLocalStorage + enterInitialsTextAreaEl.value;
    value = [quizUserDetails, highScore]; // Create an array for validation
  
    // Add a test entry to the local storage in order to be able to get the length of the local storage.
    // If the user clears the data at local storage, the below code will not work unless there is at least one entry.
    if (!localStorage.length) {
      localStorage.setItem("test", "test");
    }
      
    for (var i = 0; i < localStorage.length; i++) {
      var checkUser = "";
      var checkUserValue = [];
  
      // Assign value again
      quizUserDetails = quizLocalStorage + enterInitialsTextAreaEl.value;
  
      // Check if assigned value exists in the local storage
      checkUser = localStorage.getItem(quizUserDetails);
      // quizInitial + score will be checked against the input from the user to validate if it already exists in local storage
  
      if (checkUser === null) { // New user, no need to split
        localStorage.setItem(quizUserDetails, value.join(",")); // Value is equal to 
        window.alert("Your score of " + highScore + " has been submitted!");
        break;
      } else if (checkUser !== null) {
        checkUserValue = checkUser.split(","); // Split since the object exists in local storage
      }
  
      if (quizUserDetails === checkUserValue[0] && highScore === parseInt(checkUserValue[1])) {
        // Only insert if the current highScore is higher, 
        // otherwise let the user know they had a higher score already
        localStorage.setItem(quizUserDetails, value.join(",")); // Value is equal to 
        window.alert(highScore + " is the latest entry for user initial " + enterInitialsTextAreaEl.value + ". Entry will not be added.");
        break;
      } else if (enterInitialsTextAreaEl.value === "") {
        window.alert("Please enter an initial");
        break;
      } else if (quizUserDetails === checkUserValue[0] && highScore > parseInt(checkUserValue[1])) {
        // New high score submitted!
        localStorage.setItem(quizUserDetails, value.join(",")); // Value is equal to 
        window.alert("New high score of " + highScore + " has been submitted!.\nYour previous score was " + checkUserValue[1]);
        break;
      } else if (quizUserDetails === checkUserValue[0] && highScore < parseInt(checkUserValue[1])) {
        // Your previous score was higher!
        localStorage.setItem(quizUserDetails, value.join(",")); // Value is equal to 
        window.alert("Your previous score of " + checkUserValue[1] + " was higher. Entry will not be added.");
        break;
      } else { // New entry altogether
        localStorage.setItem(quizUserDetails, value.join(",")); // Value is equal to 
        window.alert("Your score of " + highScore + " has been submitted!");
        break;
      }
    }
  });

//Lines between 166-226 are correct and working

answer1BtnEl.addEventListener("mouseover", function() {
  answerCorrectWrong.style.display = 'none';
});

answer2BtnEl.addEventListener("mouseover", function() {
  answerCorrectWrong.style.display = 'none';
});

answer3BtnEl.addEventListener("mouseover", function() {
  answerCorrectWrong.style.display = 'none';
});

answer4BtnEl.addEventListener("mouseover", function() {
  answerCorrectWrong.style.display = 'none';
});

submitScoreEl.addEventListener("mouseover", function() {
  answerCorrectWrong.style.display = 'none';
});

startQuizBtnEl.addEventListener("click", function() {
  // debugger;
  startQuizBtnEl.style.display = 'none';
  questionDisplay.style.display = 'none';
  finalScoreDisplay.style.display = 'none';
  enterInitials.style.display = 'none';
  score = 0; // Score is 0 again.
  timeLeft = 60;
  htmlTimeLeft.textContent = timeLeft; // Counter to display once more to make it look smoother.
  finalAnswerCheck = 0; // Check if last question and wrong.
  checkTimes = 1; // Check timer for function patch.
});
//Lines between 229-260 are correct and working

//debugger;
    
var timeInterval = setInterval(function() {

    if (score === 1) { // For any wrong answer, remove a point
        highScore -= 10;
    }

    score = 0; // Move the score back to 0 to check for another wrong answer.

    if (timeLeft >= 1 && finalAnswerCheck !== 1) {
        // Assign text content to the question from our object
        questionDisplay.textContent = questionsObject.correct[questionNumber];

        questionDisplay.style.display = ""; // Allow the questions to be displayed
        answer1BtnEl.style.display = ""; // Allow our buttons to appear
        answer2BtnEl.style.display = "";
        answer3BtnEl.style.display = "";
        answer4BtnEl.style.display = "";

        // Display answers to the question
        answer1BtnEl.textContent = answersObject.answers[answerNumber][0];
        answer2BtnEl.textContent = answersObject.answers[answerNumber][1];
        answer3BtnEl.textContent = answersObject.answers[answerNumber][2];
        answer4BtnEl.textContent = answersObject.answers[answerNumber][3];

        gridContainer.appendChild(questionDisplayEl);
        gridContainer.appendChild(answer1BtnEl);
        gridContainer.appendChild(finalScoreDisplayEl);
        timeLeft -= 1;
        htmlTimeLeft.textContent = timeLeft;
        console.log("time left:" + timeLeft);
    }

}, 1000); // Closing parentheses and time interval value

//Lines between 263-397 are correct and working
            
answer1BtnEl.addEventListener("click", function() {
    if (questionDisplay.textContent === "Which were the first 2 technologies we learned at the start of class:" && answer1BtnEl.textContent === "Parentheses") {
        console.log("Correct");
        // timeLeft += 1; // Add a second for a correct answer as it will take one second to move to the next question
        questionNumber = 2; // Move to the next question which is the third question
        answerNumber = 4;
        answerCorrectWrong.style.display = "";
        answerCorrectWrong.textContent = "Correct!";
        answerCorrectWrong.style.borderTop = "solid #800080";
        answerCorrectWrongGrid.appendChild(answerCorrectWrong);
    } else {
        // Assign wrong values based on incorrect answers.
        switch (answer1BtnEl.textContent) {
            case "HTML & CSS":
                console.log("Inside the case now");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Correct!";
                answerCorrectWrong.style.borderTop = "solid #800080";
                score = 1; // Give the user a 10+ score
                questionNumber = 1; // Move to the next question which is the second question
                answerNumber = 1;
                break;
            case "MYSQL & Javascript":
                console.log("Inside the case now");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #800080";
                score = 1; // Give the user a 10+ score
                questionNumber = 3; // Move to the next question which is the third question
                answerNumber = 2;
                break;
            case "WhatsApp & Facebook":
                console.log("Inside the case now");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #800080";
                score = 1; // Give the user a 10+ score
                questionNumber = 4; // Move to the next question which is the fourth question
                answerNumber = 3;
                break;
            case "Flex Columns & ChatGPT":
                console.log("Correct");
                //timeLeft += 1; // Add a second for a correct answer as it will take one second to move to the next question
                //questionNumber = 2; // Move to the next question
                //game over
                answerCorrectWrong.style.display = ""; // Enables text content on correct and wrong answers
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #800080";
                answerCorrectWrongGrid.appendChild(answerCorrectWrong);
                //window.alert("Game Over"); Game is over at this point.
                questionNumber = 0; // Game is over, no more questions to show.
                answerNumber = 0; // Game is over, no more answers to show.
                console.log("I'm here" + timeInterval);
                answer1BtnEl.style.display = 'none';
                answer2BtnEl.style.display = 'none';
                answer3BtnEl.style.display = 'none';
                answer4BtnEl.style.display = 'none';
                answerCorrectWrong.style.display = 'none'; // When time is over, correct or wrong will go away.
                startQuizBtnEl.style.display = 'none'; // Remove the Start Quiz button.
                //answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
                questionDisplay.textContent = "You have finished the quiz!";
                finalScoreDisplay.style.display = ""; // Allow display for the final score
                enterInitials.style.display = ""; // Display the message "Enter initials"
                enterInitialsTextArea.style.display = "";  // Capture user score once submitted is clicked.
                finalAnswerCheck = 1; // Final Wrong
                lastQuestionWrong();
                finalScoreDisplay.textContent = "Your final score is: " + highScore; // Assign the latest high score.
                enterInitials.textContent = "Enter initials: ";
                submitScoreEl.style.display = "";
                submitScoreEl.textContent = "Submit";
                // Exit the quiz/timer.
                clearInterval(timeInterval);
                break;
            default:
                break;
        }
    }
});

// Lines between 301-378 are correct and working

answer2BtnEl.addEventListener("click", function() {
    if (questionDisplay.textContent === "What does HTML stand for?:" && answer2BtnEl.textContent === "Hyper Text Markup Language") {
        console.log("Correct");
        //timeLeft += 1; // Add a second for a correct answer as it will take one second to move to the next question
        //questionNumber = 2; // Move to the next question
        //game over
        answerCorrectWrong.style.display = ""; // Enables text content on correct and wrong answers
        answerCorrectWrong.textContent = "Correct!";
        answerCorrectWrong.style.borderTop = "solid #800080";
        answerCorrectWrongGrid.appendChild(answerCorrectWrong);
        //window.alert("Game Over"); Game is over at this point.
        questionNumber = 0; // Game is over, no more questions to show.
        answerNumber = 0; // Game is over, no more answers to show.
        console.log("I'm here" + timeInterval);
        answer1BtnEl.style.display = 'none';
        answer2BtnEl.style.display = 'none';
        answer3BtnEl.style.display = 'none';
        answer4BtnEl.style.display = 'none';
        answerCorrectWrong.style.display = 'none'; // When time is over, correct or wrong will go away.
        startQuizBtnEl.style.display = 'none'; // Remove Start Quiz button.
        //answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
        questionDisplay.textContent = "You have finished the quiz!";
        finalScoreDisplay.style.display = ""; // Allow display for final score
        enterInitials.style.display = ""; // Display Message Enter initials
        enterInitialsTextArea.style.display = "";  // Capture user score once submitted is clicked.
        finalScoreDisplay.textContent = "Your final score is: " + highScore; // Assign the latest high score.
        enterInitials.textContent = "Enter initials: ";
        submitScoreEl.style.display = "";
        submitScoreEl.textContent = "Submit";
        //Exit the quiz/timer.
        clearInterval(timeInterval);
    } else {
        switch (answer2BtnEl.textContent) {
            case "Hyper Text Markup Language":
                console.log("Inside the case now");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Correct!";
                answerCorrectWrong.style.borderTop = "solid #800080";
                score = 1; // Give the user a 10+ score
                questionNumber = 1; // Move to the next question which is the second question
                answerNumber = 1;
                break;
            case "High Tech Markup Language":
                console.log("Inside the case now");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #800080";
                score = 1; // Give the user a 10+ score
                questionNumber = 2; // Move to the next question which is the third question
                answerNumber = 4;
                console.log(score);
                break;
            case "Home Tool Markup Language":
                console.log("Inside the case now");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #800080";
                score = 1; // Give the user a 10+ score
                questionNumber = 3; // Move to the next question which is the fourth question
                answerNumber = 2;
                break;
            case "Hyperlinking Text Markup Language":
                console.log("Inside the case now");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #800080";
                score = 1; // Give the user a 10+ score
                questionNumber = 4; // Move to the next question which is the fifth question
                answerNumber = 3;
                break;
        }
    }
});

// Lines between 382-455 are correct and working

answer3BtnEl.addEventListener("click", function() {
    if (questionDisplay.textContent === "What does CSS stand for?" && answer3BtnEl.textContent === "Cascading Style Sheets") {
        console.log("Correct");
        //timeLeft += 1; // Add a second for a correct answer as it will take one second to move to the next question
        questionNumber = 1; // Move to the next question which is the second question
        answerNumber = 1;
        answerCorrectWrong.style.display = ""; // Enables text content on correct and wrong answers
        answerCorrectWrong.textContent = "Correct!";
        answerCorrectWrong.style.borderTop = "solid #800080";
        answerCorrectWrongGrid.appendChild(answerCorrectWrong);
    } else if (questionDisplay.textContent === "A very useful tool to debug arrays is:" && answer3BtnEl.textContent === "For loops") {
        console.log("Correct");
        //timeLeft += 1; // Add a second for a correct answer as it will take one second to move to the next question
        questionNumber = 4; // Move to the next question which is the fifth question
        answerNumber = 3;
        answerCorrectWrong.style.display = ""; // Enables text content on correct and wrong answers
        answerCorrectWrong.textContent = "Correct!";
        answerCorrectWrong.style.borderTop = "solid #800080";
        answerCorrectWrongGrid.appendChild(answerCorrectWrong);
    } else if (questionDisplay.textContent === "The condition statement if/else is enclosed with the following:" && answer3BtnEl.textContent === "Quotes") {
        console.log("Inside the case now");
        answerCorrectWrong.style.display = "";
        answerCorrectWrong.textContent = "Wrong!";
        answerCorrectWrong.style.borderTop = "solid #800080";
        score = 1; // Give the user a 10+ score
        questionNumber = 2; // Move to the next question which is the third question
        answerNumber = 4;
    } else {
        switch(answer3BtnEl.textContent) {
            case "Cascade Style Sheets":
                console.log("Inside the case now");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #800080";
                score = 1; // Give the user a 10+ score
                questionNumber = 3; // Move to the next question which is the fourth question
                answerNumber = 2;
                break;
            case "Computer Style Sheets":
                console.log("Inside the case now");
                score = 1; // Give the user a 10+ score
                questionNumber = 0; // Game is over, no more questions to show.
                answerNumber = 0; // Game is over, no more answers to show.
                console.log("I'm here" + timeInterval);
                answer1BtnEl.style.display = 'none';
                answer2BtnEl.style.display = 'none';
                answer3BtnEl.style.display = 'none';
                answer4BtnEl.style.display = 'none';
                answerCorrectWrong.style.display = 'none'; // When time is over, correct or wrong will go away.
                startQuizBtnEl.style.display = 'none'; // Remove Start Quiz button.
                //answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
                questionDisplay.textContent = "You have finished the quiz!";
                finalScoreDisplay.style.display = ""; // Allow display for final score
                enterInitials.style.display = ""; // Display Message Enter initials
                enterInitialsTextArea.style.display = "";  // Capture user score once submitted is clicked.
                finalAnswerCheck = 1; // Final Wrong
                lastQuestionWrong();
                finalScoreDisplay.textContent = "Your final score is: " + highScore; // Assign the latest high score.
                enterInitials.textContent = "Enter initials: "
                submitScoreEl.style.display = "";
                submitScoreEl.textContent = "Submit";
                //Exit the quiz/timer.
                clearInterval(timeInterval);
                break;
        }
    }
});

// Lines between 458-524 are correct and working

answer4BtnEl.addEventListener("click", function() {
    if (questionDisplay.textContent === "Which programming language is often used for client-side web development?:" && answer4BtnEl.textContent === "JavaScript") {
        console.log("Correct");
        // timeLeft += 1; // Add a second for a correct answer as it will take one second to move to the next question
        // Game is overquestionNumber = 4; // Move to the next question
        questionNumber = 3; // Move to the next question which is the fourth question
        answerNumber = 2;
        answerCorrectWrong.style.display = ""; // Enables text content on correct and wrong answers
        answerCorrectWrong.textContent = "Correct!"
        answerCorrectWrong.style.borderTop = "solid #800080";
        answerCorrectWrongGrid.appendChild(answerCorrectWrong);
    } else {
        switch(answer4BtnEl.textContent) {
            case "To create web pages":
                console.log("Inside the case now");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #800080";
                score = 1; // Give the user a 10+ score
                questionNumber = 1; // Move to the next question which is the second question
                answerNumber = 1;
                break;
            case "To manage and store data":
                console.log("Inside the case now");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #800080";
                score = 1; // Give the user a 10+ score
                questionNumber = 2; // Move to the next question which is the third question
                answerNumber = 4;
                break;
            case "To design user interfaces":
                console.log("Inside the case now");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #800080";
                score = 1; // Give the user a 10+ score
                questionNumber = 4; // Move to the next question which is the fifth question
                answerNumber = 3;
                break;
            case "To write algorithm":
                console.log("Inside the case now");
                answerCorrectWrong.style.display = "";
                answerCorrectWrong.textContent = "Wrong!";
                answerCorrectWrong.style.borderTop = "solid #800080";
                score = 1; // Give the user a 10+ score
                // questionNumber = 4; // Move to the next question which is the second question
                // answerNumber = 3;
                questionNumber = 0; // Game is over, no more questions to show.
                answerNumber = 0; // Game is over, no more answers to show.
                console.log("I'm here" + timeInterval);
                answer1BtnEl.style.display = 'none';
                answer2BtnEl.style.display = 'none';
                answer3BtnEl.style.display = 'none';
                answer4BtnEl.style.display = 'none';
                answerCorrectWrong.style.display = 'none'; // When time is over, correct or wrong will go away.
                startQuizBtnEl.style.display = 'none'; // Remove Start Quiz button.
                // answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
                questionDisplay.textContent = "You have finished the quiz!";
                finalScoreDisplay.style.display = ""; // Allow display for final score
                enterInitials.style.display = ""; // Display Message Enter initials
                enterInitialsTextArea.style.display = ""; // Capture user score once submitted is clicked.
                finalAnswerCheck = 1; // Final Wrong
                lastQuestionWrong();
                finalScoreDisplay.textContent = "Your final score is: " + highScore; // Assign the latest high score.
                enterInitials.textContent = "Enter initials: "
                submitScoreEl.style.display = "";
                submitScoreEl.textContent = "Submit";
                // Exit the quiz/timer.
                clearInterval(timeInterval);
                break;
        }
    }
});

/// Lines between 528-601 are correct and working

if (timeLeft === 0) {
    console.log("I'm here" + timeInterval);
    questionNumber = 0; // Reset all questions
    answerNumber = 0; // Reset all possible answers.
    answer1BtnEl.style.display = 'none';
    answer2BtnEl.style.display = 'none';
    answer3BtnEl.style.display = 'none';
    answer4BtnEl.style.display = 'none';
    answerCorrectWrong.style.display = 'none'; // When time is over, correct or wrong will go away.
    // answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
    questionDisplay.textContent = "Game Over!. Try again by clicking on \"Click Start Quiz\"";
    startQuizBtnEl.style.display = "";
    clearInterval(timeInterval);

    // gridContainer.appendChild(questionDisplayEl);

    // displayMessage();
}

function lastQuestionWrong() {
    if (finalAnswerCheck === 1 && checkTimes === 1) {
        highScore -= 10;
        checkTimes = 2;
    }
    return highScore;
}
// Lines between 605-630 are correct and working