import inquirer from "inquirer";
let todos = [];
let condition = true;
console.log("\n \t Wellcome to todo list Application \t \n");
while (condition) {
    let addtask = await inquirer.prompt([{
            name: "todo",
            type: "input",
            message: "What you want to add in your Todos?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more ?",
            default: "false"
        }
    ]);
    todos.push(addtask.todo);
    condition = addtask.addMore;
    console.log(todos);
}
console.log(`your updated list : ${todos}`);
