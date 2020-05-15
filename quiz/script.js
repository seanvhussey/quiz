var questions = [
  {
    question: "What is an object that holds multiple values?",
    choiceA: ["Array", "alphanumeric", "ordered list", "Objective list"],
    correct: 0
  },
  {
    question: "What tags do you use to insert JavaScript into a file?",
    choices = ["href", "Java", "link", "script"],
    correct = 3
  },
];


function generateQuiz(){
  for (i = 0; i<questions.length; i++)
};

var questionsEl = document.getElementById("questionDisplay");
var choiceEl = document.getElementById("choices");
function showquestions() {
  var questionTitle = document.getElementById("questionTitle");
  var currentQuestion = questions[0];
  var choices = choices[0];
  questionTitle.innerHTML = currentQuestion.question;
  console.log(currentQuestion.question);
}
showquestions();
