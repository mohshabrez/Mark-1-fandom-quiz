var readline_Sync = require("readline-sync");
var chalk = require('chalk');
var user_name = readline_Sync.question(chalk.red("Enter your name: "));
let greeting = readline_Sync.keyInYN(chalk.green(`Hello ${user_name}, Are You (Royal Enfield Lover) ?`));

if (greeting) {
  console.log(chalk.bgCyan("Then I'll Test how much you know about RE?"));
  console.log("=====================================================")
}
else {
  console.log(chalk.bgCyan("UNAUTHORIZED ACESSS DENIED"));
  return -1
}

var user_score = 0;

var highScores = [
  {
    name: "Manish",
    score: 8,
  },

  {
    name: "Shabaz",
    score: 9,
  },
]

var questions = [{
  question: "What is my NAME? ",
  answer: "Shabrez"
}, {
  question: "What is my nickname?",
  answer: "Shaik"
}, {
  question: "What is my favourite food?",
  answer: "Biryani"
},
{
  question: "What Do I play most?",
  answer: "COD"
},
{
  question: "Which bike I own?",
  answer: "Royal Enfield"
},
{
  question: "My Last Trip?",
  answer: "Chikmanglur trek"
},

]

function play(question, answer) {
  var userAnswer = readline_Sync.question(chalk.yellow(question));
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("You are right!! Moving to next question"));
    user_score = user_score + 2;
  }
  else {
    console.log(chalk.red("You are wrong!! Try other question"));
    console.log(chalk.greenBright("Correct Answer: " + answer));
  }

  console.log("current score:", user_score);
  console.log("-----------------------------------------");
}

function playnow() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);

  }
}


function showScores() {
  console.log(chalk.bgMagenta("🎊YAY! You SCORED🎉🎉: ", user_score));
  console.log("-----------------------------------")

  console.log(chalk.bgMagenta("Check out the high scores, if your score is high check the next one it will append in a new output"));
  console.log("-----------------------------------")
  console.log(chalk.red("High Scores"));
  highScores.map(score => console.log(score.name, " : ", score.score));
}


function updateScore() {
  var top_scores = highScores.map(score => (score.score));
  // console.log(top_scores);
  temp_data = {
    name: user_name,
    score: user_score
  }
  for (var i = 0; i < top_scores.length; i++) {
    if (user_score >= top_scores[i]) {
      highScores.push(temp_data);
      break
    }
    else {
      return errorMessage();
    }

  }
  console.log("===============================================")
  console.log(chalk.bgYellow("Here are your new updated scores, check if your score is appended or else text us will append that"));
  console.log("=================================================")
  console.log((highScores));
}





function errorMessage() {
  console.log("----------------------------------")
  console.log(chalk.red("Sorry!! You didnt cross the high score😔😔!!"));
}

playnow();
showScores();
updateScore();








// // function updateScore() {
// //   var top_scores = highScores.map(score => (score.score));
// //    // var top_names = highScores.map(score => (score.name));
// //   //console.log(top_names);
// //   temp_data = {
// //     name: user_name,
// //     score: user_score
// //   }
// //   for (var i = 0; i < top_scores.length; i++) {
// //     if (user_score >= top_scores[i]) {
// //       highScores.push(temp_data);
// //       break
// //     }
// //     else {
// //       return errorMessage();
// //     }

// //   }   console.log("======================================")
// //   console.log(chalk.bgYellow("Here are your new updated scores, check if your score is appended or else text us will append that"));
// //   console.log("======================================")
// // console.log(chalk.red(highScores));
// // }

// // for(var i =0 ; i<top_names.length; i++) {
//       //   if(user_name.toUpperCase() === top_names[i].toUpperCase()){
//       //     break
//       //   }
//     //     else{

//     //     }

//     //   }
//     // }

























// var readline_Sync = require("readline-sync");
// // var chalk = require('chalk');
// var user_name = readline_Sync.question("Enter your name: ");
// let greeting = readline_Sync.keyInYN(`Hello ${user_name}, Do you know me?`);

// if (greeting) {
//   console.log(("Then I'll Test how much you know me"));
// }
// else {
//   console.log("UNAUTHORIZED ACESSS DENIED");
//   return -1
// }

// var user_score = 0;

// var highScores = [
//   {
//     name: "Manish",
//     score: 8,
//   },

//   {
//     name: "Shabaz",
//     score: 9,
//   },
// ]


// function play(question, answer) {
//   var userAnswer = readline_Sync.question(question);
//   if (userAnswer.toUpperCase() === answer.toUpperCase()) {
//     console.log("right!!");
//     user_score = user_score + 2;
//   }
//   else {
//     console.log("wrong!!");
//   }

//   console.log("current score:", user_score);
//   console.log("-----------------------------------------");
// }

// function playnow() {
//   for (var i = 0; i < questions.length; i++) {
//     var currentQuestion = questions[i];
//     play(currentQuestion.question, currentQuestion.answer);

//   }
// }


// function showScores() {
//   console.log("YAY! You SCORED: ", user_score);
//   console.log("---------------------------------------------------------------")

//   console.log("Check out the high scores, if your score is high check the next one it will append in a new output");
//   console.log("---------------------------------------------------------------")

//   highScores.map(score => console.log(score.name, " : ", score.score))
// }

// function updateScore() {
//   var top_scores = highScores.map(score => (score.score));
//   console.log(top_scores);
//   temp_data = {
//     name: user_name,
//     score: user_score
//   }
//   for (var i = 0; i < top_scores.length; i++) {
//     if (user_score >= top_scores[i]) {
//       highScores.push(temp_data);
//       break
//     }
//     else {
//       return "Sorry, you didnt crossed the high scores"
//     }

//   }
//   console.log("===============================================")
//   console.log("Here are your new updated scores, check if your score is appended or else text us will append that");
//   console.log("=================================================")
//   console.log(highScores);
// }


// playnow();
// showScores();
// updateScore();















// var top_scores = [{
//   Name: "shabaz",
//   Score: 10
// }, {
//   Name: "arbaz",
//   Score: 6
// }, {
//   Name: "Manish",
//   Score: 8
// }, {
//   Name: "Sameer",
//   Score: 5
// }]

//  function highScore() {
//   top_scores.map(user_score => console.log(user_score.name,user_score.score))

// }

// highScore(









// function Quiz_to_know_me(question) {
//   if (readline_Sync.keyInYN(question)) {
//     console.log("You are Right!!!");
//     user_score += 2;
//   }
//   else {
//     console.log("You are wrong!!!");
//   }
//   console.log("Current score:", user_score);
//   console.log("---------------------------")
// }








// function top_score(score) {
//   if (user_score >= score) {
//     new_top_score = user_score;

//     //top_score.push({Name:user_name,Score:user_score});
//   }

// }

// for (var i = 0; i < top_scores.length; i++) {
//   var current_score = top_scores[i];
//   top_score(current_score.Score)

// }

// if(new_top_score === top_scores()){

// }  
// else {
//   console.log("Better luck next time!!!")
//   }




