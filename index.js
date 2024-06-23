#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\nWelcome to Rameez's To-Do List\n");
let myLoop = true;
let toDoList = [];
while (myLoop) {
    const userInput = await inquirer.prompt([
        {
            type: "input",
            name: "toDoItem",
            message: "Enter item in your To-Do List!"
        }, {
            type: 'confirm',
            name: 'addMore',
            message: "Do you want to add more items",
            default: false
        }, {
            type: 'confirm',
            name: 'seeList',
            message: "Do you want to see list?",
            default: false,
            when(userInput) {
                return userInput.addMore === false;
            }
        }
    ]);
    const { toDoItem, addMore, seeList } = userInput;
    if (toDoItem) {
        toDoList.push(toDoItem);
    }
    if (seeList) {
        console.log("\nHere is your To-Do List:");
        toDoList.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
    myLoop = addMore;
}
