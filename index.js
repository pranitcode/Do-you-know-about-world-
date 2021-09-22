const readlineSync = require("readline-sync");
const chalk = require('chalk');
const log = console.log;
var scorer = 0;

// https://replit.com/@pranitcode/About-World?embed=true
const MyAllQuestions = [
  {
    question:" 1. How many countries in the world ?",
    answer:"195",
    hint:"195 246 123 "
   },
   {
    question:" 2. Which country Know as land of rising sun ? ",
    answer:"japan",
    hint:" Options:- japan india usa  "
  },
  {
    question:" 3. How many continents in the world? ",
    answer:"seven",
    hint: " Options:- Eight ,Seven,Four, nine "
  },
    {
    question:" 4. which continents has Highest number of countries present ? ",
    answer:"africa",
    hint:" Options:- Options:- africa or asia "
  },
  {
    question:" 5. Total number of Oceans in the world? ",
    answer:"5",
    hint:" Options:- 2 , 4 , 6 ,5 "
  },
  {
    question: " 6.Largest Area country ",
    answer:"Russia",
    hint:" Options:- china or Russia or india "
  }
]
var listlength =  MyAllQuestions.length;

const HighestScore = [
  {
    name:"yachika",
    score: "6"
  }, 
]


 function LoopforQuetions(listlength) {
  for(i=0; i<listlength;i++) {
  var que = MyAllQuestions[i].question
  var ans = MyAllQuestions[i].answer
  var hin = MyAllQuestions[i].hint
  AnswerCheck(que,ans,hin) 
 }
}


function AnswerCheck(que,ans,hin) {
  var QuesKaAns = readlineSync.question(que + chalk.blue(hin));
  if(QuesKaAns.toLowerCase()===ans.toLowerCase()) {
    log(chalk.green("you are right ✔"));
    console.log("..........................")
    scorer++;
  
  } else {
    log(chalk.red("wrong ❌"))
      console.log("..........................")
  }
};

function Start() {
    var userName = readlineSync.question("What is your good Name ");
    console.log(`welcome ${userName}`)
  }

function ShowScor(scorer,HighestScore) {
  log(chalk.yellow(`your score ${scorer}`))
  
HighestScore.map(user =>Number(user.score) === Number(scorer) ? console.log(`yay😅😆,your score also same as  ${user.name} : ${user.score} , Now take a screenshot and send me `) : console.log(`Highest Score:- ${user.name} = ${user.score}`)
 ); 
};


Start();
LoopforQuetions(listlength);
ShowScor(scorer,HighestScore);
