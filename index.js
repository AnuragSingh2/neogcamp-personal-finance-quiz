const readlineSync = require('readline-sync');
const chalk = require('chalk');

//score
let score = 0;

//chalk styles
const wrong = chalk.bold.red;
const correct = chalk.bold.green;
const info = chalk.underline.magenta;

//welcome
console.log("When you are economically smart and can handle your finances prudently, you can handle much stress easily. A personal finance quiz is good to increase learning and understanding of your finance.");

const username = readlineSync.question("What's your name? ");
console.log("********");
console.log("--------");
console.log(`Welcome ${username}, A personal finance quiz of TEN questions is prepared to make you familiar with finances so you can take better decisions.`)
console.log("--------");
console.log("********")
//quiz function
const quizFunction = (question,options,answer) => {
  console.log(question);
  options.map((option,index)=>(
    console.log(`${index+1}- ${option}`)
  ))
  let userAnswer = readlineSync.question("What's right option according to you? ");
  if(parseInt(userAnswer)===answer+1){
    console.log("Right answer");
    score++;
  } 
  else{
    console.log(wrong("Wrong answer"));
  }
  console.log(`Your answer: ${options[userAnswer-1]}`)
  console.log(correct(`Correct answer: ${options[answer]}`));
  console.log("--------");
}

//high scores
const toppers = [
  {
    name:'Anurag Singh',
    score:10
  }
]

//quiz database
const quizDatabase = [
  { question:"Regularly buying investments with a set amount of money each month without regard to the price at the time is called:",
    options:["Diversification","SIP(Systematic Investment Plan)","LUMPSUM","Trading"],
    answer: 1
  },
  { question:"Spreading out risk in your investments is called:",
    options:["Diversification","Investment","Fluctuation","SIP"],
    answer: 0
  },
  { question:"When companies share profits with stockholders, this is called:",
    options:["Growth","Stock split","Dividends","Interest"],
    answer: 2
  },
  { question:"Ups and downs in the stock market are known as:",
    options:["Investments","Recession","Fluctuation","Expansion"],
    answer: 2
  },
  { question:"A corporation that does not sell its stock to the general public is called a:",
    options:["Partnership","Public Company","Joint Venture","Private Company"],
    answer: 3
  },
  { question:"A piece of the ownership of a company is called a:",
    options:["Principal","Dividend","Stock","Bond"],
    answer: 2
  },
  { question:"The amount of money you invest is called",
    options:["Dividends","Principal","Growth","Coupon"],
    answer: 1
  },
  { question:"When a bank takes possession of a home because the borrower has failed to make loan payments, it is called",
    options:["Mortgage","Underwater","Assessment","Foreclosure"],
    answer: 3
  },
  { question:"The difference between what you owe on your home and the balance of the mortgage on the home is called",
    options:["Foreclosure","Assessment","Equity","Underwater"],
    answer: 2
  },
  { question:"The gradual decrease in the value of an asset is called:",
    options:["Repossession","Depreciation","Appreciation","Foreclosure"],
    answer: 1
  }    
]


//for loop ques display
for(let i=0;i<quizDatabase.length;i++){
  currentQues = quizDatabase[i];
  quizFunction(currentQues.question,currentQues.options,currentQues.answer);
}

//final score & you are smart or not
console.log(`Your final score is ${score} out of 10`);
console.log(info('Toppers leaderboard'))

for (person of toppers){
  console.log(`${person.name}: ${person.score}`)
}

