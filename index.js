var readlineSync = require("readline-sync");
var userName = readlineSync.question("What's your name? ");
console.log(`Welcome ${userName} do u know Ankit?`);

var score = 0;
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Correct");
    score += 1;
  } else {
    console.log("Incorrect");
  }

  console.log("current score: " + score);
  console.log("--------------");
}
questions = [
  { question: "Where do i live? ", answer: "Khatima" },
  { question: "Who is my favorite superhero? ", answer: "Ironman" },
  { question: "Which year was i born? ", answer: "2000" },
  { question: "Which sports i like to play the most? ", answer: "BasketBall" },
  {
    question: "Name the place where i will be Studying for next 6 months? ",
    answer: "neogcamp",
  },
];
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("YAY! YOU SCORED : ", score);
