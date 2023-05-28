// Quiz Data
const quizData = {
    1: {
      question: "Which were the first 2 technologies we learned at the start of class",
      options: {
        0: "HTML & CSS",
        1: "MYSQL & Javascript",
        2: "WhatsApp & Facebook",
        3: "Flex Columns & ChatGPT"
      },
      correctAnswer: 0
    },
    2: {
      question: "What does HTML stand for?",
      options: {
        0: "Hyper Text Markup Language",
        1: "High Tech Markup Language",
        2: "Home Tool Markup Language",
        3: "Hyperlinking Text Markup Language"
      },
      correctAnswer: 0
    },
    3: {
      question: "What does CSS stand for?",
      options: {
        0: "Cascading Style Sheets",
        1: "Computer Style Sheets",
        2: "Creative Style Sheets",
        3: "Coded Style Sheets"
      },
      correctAnswer: 0
    },
    4: {
      question: "Which programming language is often used for client-side web development?",
      options: {
        0: "Python",
        1: "Java",
        2: "JavaScript",
        3: "C++"
      },
      correctAnswer: 2
    },
    5: {
      question: "What is the purpose of a database management system (DBMS)?",
      options: {
        0: "To create web pages",
        1: "To manage and store data",
        2: "To design user interfaces",
        3: "To write algorithms"
      },
      correctAnswer: 1
    }
  };
  
  // Variables
  let currentQuestion = 1;
  let score = 0;
  let timeLeft = 60;
  let intervalId;
  
  // Elements
  const startQuizBtn = document.getElementById("startQuizBtn");
  const questionDisplay = document.getElementById("questionDisplay");
  const optionsContainer = document.getElementById("optionsContainer");
  const messageDisplay = document.getElementById("messageDisplay");
  const timerDisplay = document.getElementById("timerDisplay");
  const scoreDisplay = document.getElementById("scoreDisplay");
  
  // Event Listener for Start Quiz Button
  startQuizBtn.addEventListener("click", startQuiz);
  
  // Start Quiz Function
  function startQuiz() {
    startQuizBtn.style.display = "none";
    displayQuestion();
    startTimer();
  }
  
  // Display Question Function
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
    questionDisplay.textContent = questionData.question;
    optionsContainer.innerHTML = "";
  
    for (let i = 0; i < Object.keys(questionData.options).length; i++) {
      const option = document.createElement("button");
      option.classList.add("option");
      option.textContent = questionData.options[i];
      option.addEventListener("click", () => selectAnswer(i));
      optionsContainer.appendChild(option);
    }
  }
  
  // Select Answer Function
  function selectAnswer(optionIndex) {
    clearInterval(intervalId);
  
    const questionData = quizData[currentQuestion];
    const selectedOption = questionData.options[optionIndex];
  
    if (optionIndex === questionData.correctAnswer) {
      messageDisplay.textContent = "Correct!";
      score++;
    } else {
      messageDisplay.textContent = "Wrong!";
    }
  
    currentQuestion++;
    if (currentQuestion <= Object.keys(quizData).length) {
      setTimeout(() => {
        displayQuestion();
        startTimer();
        messageDisplay.textContent = "";
      }, 1000);
    } else {
      endQuiz();
    }
  }
  
  // Start Timer Function
  function startTimer() {
    timeLeft = 60;
    timerDisplay.textContent = timeLeft;
  
    intervalId = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = timeLeft;
  
      if (timeLeft === 0) {
        clearInterval(intervalId);
        endQuiz();
      }
    }, 1000);
  }
  
  // End Quiz Function
  function endQuiz() {
    questionDisplay.textContent = "Quiz completed!";
    optionsContainer.innerHTML = "";
    messageDisplay.textContent = "";
    timerDisplay.textContent = "";
  
    scoreDisplay.textContent = "Final Score: " + score;
    scoreDisplay.style.display = "";
  }