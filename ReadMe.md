## User Story

AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

## Acceptance Criteria

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

## REMEMBER TO PUT A SCREEN SHOT OF THE FINISHED QUIZ HERE


prompt: "What is JavaScript"?,
    options: [
      {
        value: 1. "A scripting language used for creating interactive webpages",
        isCorrect: true,
      },
      {
        value: "A video game",
        isCorrect: false,
      },
      {
        value: "An indie movie",
        isCorrect: false,
      },
      {
        value: "A type of computer"
      } isCorrect: false,
    ],
  },
  {
    prompt: "What's my last name?",
    options: [
      {
        value: "Paul",
        isCorrect: false,
      },
      {
        value: "Martinez",
        isCorrect: true,
      },
      {
        value: "Jake",
        isCorrect: false,
      },
    ],
  },
];