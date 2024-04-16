#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.red.bold("Enter your sentence to count the word:"),
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(chalk.green.bold(` Your sentence to count the word is  ${words.length}`));
