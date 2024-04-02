#! /usr/bin/env node
import inquirer from "inquirer";
let list = [];
let condition = true;
while(condition){
let task = await inquirer.prompt([{
    message:"What do you want to add in your todos",
    name:'takeinput',
    type:"input"
}
,{
    message:"Do you want to add more? ",
    name:"asking",
    type:"confirm"
}])

list.push(task.takeinput)
console.log(list);
condition = task.asking;
}