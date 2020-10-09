var questionDisp = document.getElementById("question");
var answer1Disp = document.getElementById("answer-1");
var answer2Disp = document.getElementById("answer-2");
var answer3Disp = document.getElementById("answer-3");
var answer4Disp = document.getElementById("answer-4");
var scoreDisp = document.getElementById("score");
var nextButton = document.getElementById("next-button");
var highScoreButton = document.getElementById("high-score");
var score = 0;
var indexQuestions = 0;
var timer = 0;
var answersEl = [ answer1Disp, answer2Disp, answer3Disp, answer4Disp];
var questions = [
    {
        q: "Welcome to this JavaScrip quiz please read all of the instructions and have fun!",
        a1: "In this quiz you will be asked multiple questions to test your knowledge of JavaScript",
        a2: "This quiz will track you score in the bottom left hand corner",
        a3: "Your score will be tracked to a leader board so you can come back and see your improvement",
        a4: "When you are ready click this box to proceed!",
        correct: "a4",
        type: "intro"
    },
    {
        q: "what is the color of the sky?",
        a1: "blue",
        a2: "green",
        a3: "red",
        a4: "purple",
        correct: "a1",
        type: "question"
    },
    {
        q: "what is the color of the banana?",
        a1: "blue",
        a2: "yellow",
        a3: "red",
        a4: "purple", 
        correct: "a2",
        type: "question"
    },
    {
        q: "what is the color of grass?",
        a1: "purple",
        a2: "orange",
        a3: "blue",
        a4: "green",
        correct: "a4",
        type: "question"
    },
    {
        q: "what is the color of the purple elephant?",
        a1: "purple",
        a2: "orange",
        a3: "blue",
        a4: "green",
        correct: "a1",
        type: "question"
    }
];


answer1Disp.onclick = function(){
    console.log(event.target)
    confirmAnswer("a1", indexQuestions);
};
answer2Disp.onclick = function(){
    console.log(event.target)
    confirmAnswer("a2", indexQuestions);
};
answer3Disp.onclick = function(){
    console.log(event.target)
    confirmAnswer("a3", indexQuestions);
};
answer4Disp.onclick = function(){
    console.log(event.target)
    confirmAnswer("a4", indexQuestions);
};



function confirmAnswer(answer, index) {
    var isCorrrect = questions[index].correct === answer;
    if (isCorrrect === true){
        // if true we change the background color to green
        // add class correct 
        // attempting to add a class to the button i just clicked
        
        
        // increase the score counter
        score ++;
        scoreDisp.innerHTML =  "Score: " + score;     
    }
    else{
        // if false change to red decrease timer
        // add class inccorect
        // decrease timer        
    }
    // console.log(score);
    // scoreDisp.textContent = "Score:" + score;
    // if first question start timer


    // indexQuestions ++;
    // create a next questoin button
    if (indexQuestions < questions.length - 1){
    var newButton = document.createElement("BUTTON");
    newButton.innerHTML = "Next Question";
    newButton.className = "btn btn-dark";
    nextButton.innerHTML = "";
    nextButton.append(newButton);
    indexQuestions ++;
    }
    else{
    var newButton = document.createElement("BUTTON");
    newButton.innerHTML = "High Score";
    newButton.className = "btn btn-dark";
    highScoreButton.innerHTML = "";
    highScoreButton.append(newButton);
    }
};

nextButton.onclick = function(){
    
    questionDisp.textContent = questions[indexQuestions].q;
    answer1Disp.textContent = questions[indexQuestions].a1;
    answer2Disp.textContent = questions[indexQuestions].a2;
    answer3Disp.textContent = questions[indexQuestions].a3;
    answer4Disp.textContent = questions[indexQuestions].a4;
    nextButton.innerHTML = "";
};

highScoreButton.onclick = function(){
    
}



// create content for questions and answers
// create functions to popluate questions and answers
// creat functions/event listeners to watch for answer clicks
// create functions to manipulate BG of cards to show correct or incorrect answer
// create function to update score display
// create button to move to next question and reset car BG to default
// once all questions are answered create score list that shows user scores from all previous attempts
// create timer that starts on start click