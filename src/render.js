import TodoItem from "./todo.js";
import Project from "./projects.js";
import { todoManipulation, projectList } from "./application.js";
import { mainController, projectController } from "./interface.js";
export default function renderPage(){
    let project1 = new Project("1");
    let item1 = new TodoItem("title", "description", "2026-07-25", "High");
    let item2 = new TodoItem("title2", "description2", "2026-07-25", "Mid");
    let item3 = new TodoItem("title3", "description3", "2026-08-08", "Low");
    todoManipulation.markComplete(item1);
    project1.addTodo(item1);
    project1.addTodo(item2);
    project1.addTodo(item3);
    projectList.add(project1);
    // console.log(project1.todoList);
    projectController(projectList.get());
    mainController(item1);
    // mainController(item2);
    console.log(item1.id);
    document.querySelectorAll(".todo-checkbox").forEach((checkbox)=>{
        checkbox.addEventListener("click", () => {
            todoManipulation.markComplete(project1.todoList.find(todo=>todo.id==event.target.dataset.id));
            projectController(projectList.get());
            mainController(item1);
            console.log(project1.todoList.find(todo=>todo.id==event.target.dataset.id))
        })
    })
}