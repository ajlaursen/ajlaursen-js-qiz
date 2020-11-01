var questionDisp = document.getElementById("question");
var answer1Disp = document.getElementById("answer-1");
var answer2Disp = document.getElementById("answer-2");
var answer3Disp = document.getElementById("answer-3");
var answer4Disp = document.getElementById("answer-4");
var scoreDisp = document.getElementById("score");
var nextButton = document.getElementById("next-button");
var highScoreButton = document.getElementById("high-score");
var newGameButton = document.getElementById("new-game");
var everything = document.getElementById("everything");
var timerDisp = document.getElementById("timer");
var answerClicked = null;
var pageLocked = false;
var score = -1;
var indexQuestions = 0;
var count = 60;
var scoreArray = [];
var questions = [
  {
    q: "Welcome to this JavaScrip quiz please read all of the instructions and have fun!",
    a1: "In this quiz you will be asked multiple questions to test your knowledge of JavaScript",
    a2: "This quiz will track you score in the bottom left hand corner",
    a3: "Your score will be tracked to a leader board so you can come back and see your improvement",
    a4: "When you are ready click this box to proceed!",
    correct: "a4",
    type: "intro",
  },
  {
    q: "what is the color of the sky?",
    a1: "blue",
    a2: "green",
    a3: "red",
    a4: "purple",
    correct: "a1",
    type: "question",
  },
  {
    q: "what is the color of the banana?",
    a1: "blue",
    a2: "yellow",
    a3: "red",
    a4: "purple",
    correct: "a2",
    type: "question",
  },
  {
    q: "what is the color of grass?",
    a1: "purple",
    a2: "orange",
    a3: "blue",
    a4: "green",
    correct: "a4",
    type: "question",
  },
  {
    q: "what is the color of the purple elephant?",
    a1: "purple",
    a2: "orange",
    a3: "blue",
    a4: "green",
    correct: "a1",
    type: "question",
  },
];

answer1Disp.onclick = function () {
  confirmAnswer("a1", indexQuestions, answer1Disp);
};
answer2Disp.onclick = function () {
  confirmAnswer("a2", indexQuestions, answer2Disp);
};
answer3Disp.onclick = function () {
  confirmAnswer("a3", indexQuestions, answer3Disp);
};
answer4Disp.onclick = function () {
  confirmAnswer("a4", indexQuestions, answer4Disp);
};

function confirmAnswer(answer, index, clicked) {
  if (pageLocked === true) {
    console.log("page is already locked. aborting");
    return;
  }
  pageLocked = true;
  answerClicked = clicked;
  console.log("page was not locked executing function");
  var isCorrrect = questions[index].correct === answer;
  if (isCorrrect === true) {
    answerClicked.classList.add("correct");
    score++;
    scoreDisp.innerHTML = "Score: " + score;
  } else {
    answerClicked.classList.add("wrong");
    scoreDisp.innerHTML = "Score: " + score;
    count = count - 10;
  }

  if (indexQuestions < questions.length - 1) {
    var newButton = document.createElement("BUTTON");
    newButton.innerHTML = "Next Question";
    newButton.className = "btn btn-dark";
    nextButton.innerHTML = "";
    nextButton.append(newButton);
    indexQuestions++;
  } else {
    var newButton = document.createElement("BUTTON");
    newButton.innerHTML = "Scoreboard";
    newButton.className = "btn btn-dark";
    highScoreButton.innerHTML = "";
    highScoreButton.append(newButton);
    timerDisp = count;
  }
}
console.log(answerClicked);

nextButton.onclick = function () {
  pageLocked = false;
  questionDisp.textContent = questions[indexQuestions].q;
  answer1Disp.textContent = questions[indexQuestions].a1;
  answer2Disp.textContent = questions[indexQuestions].a2;
  answer3Disp.textContent = questions[indexQuestions].a3;
  answer4Disp.textContent = questions[indexQuestions].a4;
  nextButton.innerHTML = "";
  answerClicked.classList.remove("correct", "wrong");

  if (indexQuestions === 1) {
    timer = setInterval(function () {
      timerDisp.innerHTML = "Timer: " + count--;
      if (count == 1) clearInterval(timer);
    }, 1000);
  }
};
var intials = "";
var input = document.createElement("div");
var LeaderboardTitle = document.createElement("h3");
// var scoreArrayStored= [];

highScoreButton.onclick = function () {
  intials = prompt("Enter your name to be added to the leader board");
  createHighscoreDisplay();
};

function createHighscoreDisplay() {
  var scoreArrayStored= [];
  //var scoreOutput = intials + "\'s score: " + score + " Time remaining: " + count;

  var scoreOutput =
  {
    intials: intials,
    score: score,
    count: count
  }

  console.log(scoreOutput);
  everything.textContent = "";
  scoreDisp.textContent = "";
  highScoreButton.textContent = "";

  everything.appendChild(LeaderboardTitle);
  LeaderboardTitle.setAttribute("class", "text-center mt-3 mb-3");
  LeaderboardTitle.textContent = "Leaderboard";

  scoreArrayStored = JSON.parse(localStorage.getItem("scoreArray")) || [];
  console.log(scoreArrayStored);
  //onsole.log(scoreArrayStored[0].intials);
  
  scoreArrayStored.push(scoreOutput);
  localStorage.setItem("scoreArray", JSON.stringify(scoreArrayStored));
  console.log(scoreArrayStored);

  var sortedArray = scoreArrayStored.sort(function(a, b) {
    return parseFloat(b.score) - parseFloat(a.score);
});


  var forLoopLength = 10;
  if (sortedArray.length < 10){
    forLoopLength = sortedArray.length
  }
  for (let index = 0;index < forLoopLength; index++) {
    var div = document.createElement("div");

    div.innerHTML = sortedArray[index].intials + " Score:" + sortedArray[index].score + " Time remaining: " + sortedArray[index].count;
    div.setAttribute("class", "container-fluid mx-auto")
    everything.appendChild(div);
  }
  var newButton = document.createElement("BUTTON");

  newButton.innerHTML = "New Quiz";
  newButton.className = "btn btn-dark";
  newGameButton.innerHTML = "";
  newGameButton.append(newButton);
}
// DONEISH create content for questions and answers
// DONE create functions to popluate questions and answers
// DONE creat functions/event listeners to watch for answer clicks
// DONE create functions to manipulate BG of cards to show correct or incorrect answer
// DONE create function to update score display
// DONE create button to move to next question and reset car BG to default
// DONE create timer that starts on start click
// DONE create stop function for timer
// DONEonce all questions are answered create score list that shows user scores from all previous attempts