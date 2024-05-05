#! /usr/bin/env node
import inquirer from "inquirer";
let todolist = [];
let condition = true;
console.log("\n \t Wellcome to todo list Application \t \n");
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do",
                choices: [
                    "Add task",
                    "Delete Task",
                    "Update Task",
                    "View Todo-list",
                    "Exit",
                ],
            },
        ]);
        if (option.choice === "Add task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await UpdateTask();
        }
        else if (option.choice === "View Todo-list") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task:",
        },
    ]);
    todolist.push(newTask.task);
    console.log(`\n ${newTask.task} Task added successfuly in Todo-list`);
};
let viewTask = () => {
    console.log("\n Your Todo-list: \n");
    todolist.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete:",
        },
    ]);
    let deletedTask = todolist.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} this task has been deleted successfully from your Todo-List \n `);
};
let UpdateTask = async () => {
    await viewTask();
    let Update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to update:",
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name :",
        }
    ]);
    todolist[Update_task_index.index - 1] = Update_task_index.new_task;
    console.log(`\n Task at index no. ${Update_task_index.index} updated successfuly [for updated list check option:"view todo-List" ]`);
};
main();
