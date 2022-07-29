//
// made by fixedOtter on 28.7.2022
//

/* imported goods */
import inquirer from "inquirer";
import fs from 'fs';
import path from "path";

/* declarations */
const questions = [
  {
    name: 
  }
]

const getUserInput = () => {
  inquirer.prompt(questions)
  .then((answers) => {
    // handle answers data
  })
  .catch((err) => {
    console.error(err);
  })
}

getUserInput();