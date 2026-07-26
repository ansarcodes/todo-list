import TodoItem from "./todo.js";
import Project from "./projects.js";
import { todoManipulation, projectList } from "./application.js";
import { projectController } from "./interface.js";

// let item = new TodoItem("test title", "test description", "01012027", "1");
// console.log(item.isComplete);
// todoManipulation.markComplete(item);
// console.log(item.isComplete);
// console.log(item.title);
// console.log(item);


// let defaultProject = new Project("Default");
// defaultProject.addTodo(item);
// console.log(defaultProject);
// console.log(defaultProject.todoList);

// projectList.add(defaultProject);
// console.log(projectList);
// console.log(projectList.get());

// todoManipulation(item).markComplete;

// console.log(item);

// console.log(todoManipulation);
// todoManipulation.markComplete = "ast";
// console.log(todoManipulation);
// todoManipulation.markComplete(item);
// console.log(item);

// projectController(projectList.get());

let project1 = new Project("1");
let item1 = new TodoItem("title", "description", "2026-07-25", "red");
let item2 = new TodoItem("title2", "description2", "2026-07-25", "yellow");
project1.addTodo(item1);
project1.addTodo(item2);
projectList.add(project1);
console.log(project1.todoList);
projectController(projectList.get());
// console.log(projectList.get());
// projectController(projectList.get());