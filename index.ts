import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk . blackBright("\n    Welcome Sunny World (WORD COUNTER)    \n"))

const Answer : {Sentence : string;} = await inquirer .prompt ([
    {
        message : "Select the sentence to count your words",
        name : "Sentence",
        type : "input",
    },
]);

console.log(Answer)

const words = Answer . Sentence . trim( ) . split (" ")

console.log(words)

console.log(chalk.red(`Your Sentence Words Count is ${words.length}`))