import { todoManipulation } from "./application.js";

function projectController(projectList){
    const projectListContainer = document.querySelector(".project-list");
    projectListContainer.replaceChildren();
    projectList.forEach(projectItem => {
        const project = document.createElement("div");
        project.classList.add("project");
        const projectName = document.createElement("div");
        projectName.classList.add("project-name");
        projectName.textContent = projectItem.name;
        const projectTodoList = document.createElement("div");
        projectTodoList.classList.add("project-todo-list");
        projectItem.todoList.forEach(todoItem => {
            const todo = document.createElement("div");
            todo.classList.add("todo");
            todo.classList.add(`priority-${todoItem.priority.toLowerCase()}`);
            const todoMark = document.createElement("input");
            todoMark.type="checkbox";
            todoMark.classList.add("todo-checkbox");
            todoMark.dataset.id = todoItem.id;
            const todoName = document.createElement("div");
            todoName.classList.add("todo-name");
            todoName.textContent = todoItem.title;
            const todoDueDate = document.createElement("div");
            todoDueDate.classList.add("todo-due-date");
            todoDueDate.textContent = todoItem.dueDate;
            todo.append(todoMark, todoName, todoDueDate);
            projectTodoList.appendChild(todo);
        })
        project.append(projectName, projectTodoList);
        projectListContainer.appendChild(project);
    });
};
function mainController(todo){
    const mainContainer = document.querySelector(".main-container");
    mainContainer.replaceChildren();
    const mainTitle = document.createElement("div");
    mainTitle.classList.add("main-title");
    mainTitle.textContent = todo.title;
    const mainDueDate = document.createElement("div");
    mainDueDate.classList.add("main-due-date");
    mainDueDate.textContent = todo.dueDate;
    const mainPriority = document.createElement("div");
    mainPriority.classList.add(`priority-${todo.priority.toLowerCase()}`);
    mainPriority.textContent = todo.priority;
    const mainCompleteStatus = document.createElement("div");
    mainCompleteStatus.classList.add(`completed-${todo.isComplete}`);
    const mainDescription = document.createElement("div");
    mainDescription.classList.add("main-description");
    mainDescription.textContent = todo.description;
    mainContainer.append(mainTitle, mainDueDate, mainPriority, mainCompleteStatus, mainDescription);
}

export { projectController, mainController };