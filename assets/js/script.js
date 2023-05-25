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
  
  var score = 0;
  var currentQuestion = 0;
  var timeLeft = 60;
  var timerInterval;
  
  // Function to start the timer
  function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 1000);
  }
  
  // Function to display the current question
  function displayQuestion() {
    var question = questions[currentQuestion];
    var title = question.title;
    var choices = question.choices;
  
    console.log("Question: " + title);
    for (var i = 0; i < choices.length; i++) {
      console.log(i + 1 + ". " + choices[i]);
    }
  
    var userAnswer = prompt("Please enter the number of your answer:");
  
    if (userAnswer !== null) {
      var choiceIndex = parseInt(userAnswer) - 1;
      var selectedChoice = choices[choiceIndex];
  
      if (selectedChoice === question.answer) {
        console.log("Correct!");
        score++;
      } else {
        console.log("Incorrect!");
      }
  
      console.log("------------------------------");
  
      currentQuestion++;
      if (currentQuestion < questions.length) {
        displayQuestion();
      } else {
        endQuiz();
      }
    }
  }
  
  // Function to end the quiz and display the final score
  function endQuiz() {
    clearInterval(timerInterval);
    console.log("Quiz completed!");
    console.log("Your score: " + score + " out of " + questions.length);
  }
  
  startTimer();
  displayQuestion();
  