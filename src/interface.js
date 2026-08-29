import addIcon from "./images/add_icon.png";
// import { todoManipulation } from "./application.js";

// function projectController(projectList){
//     const projectListContainer = document.querySelector(".project-list");
//     projectListContainer.replaceChildren();
//     projectList.forEach(projectItem => {
//         const project = document.createElement("div");
//         project.classList.add("project");
//         const projectNameContainer = document.createElement("div");
//         projectNameContainer.classList.add("project-name-container");
//         const projectName = document.createElement("div");
//         projectName.classList.add("project-name");
//         projectName.textContent = projectItem.name;
//         const projectAddTodoBtn = document.createElement("button");
//         projectAddTodoBtn.classList.add("project-add-todo-btn");
//         projectAddTodoBtn.command = "show-modal";
//         projectAddTodoBtn.commandForElement = document.getElementById("project-add-todo-dialog");
//         projectAddTodoBtn.textContent = "+";
//         const projectEditBtn = document.createElement("button");
//         projectEditBtn.classList.add("project-edit-btn");
//         projectEditBtn.textContent = "edit_icon";
//         projectNameContainer.append(projectName, projectAddTodoBtn, projectEditBtn);
//         const projectTodoList = document.createElement("div");
//         projectTodoList.classList.add("project-todo-list");
//         projectItem.todoList.forEach(todoItem => {
//             const todo = document.createElement("div");
//             todo.classList.add("todo");
//             todo.classList.add(`priority-${todoItem.priority.toLowerCase()}`);
//             const todoMark = document.createElement("input");
//             todoMark.type="checkbox";
//             todoMark.classList.add("todo-checkbox");
//             todoMark.dataset.id = todoItem.id;
//             const todoName = document.createElement("div");
//             todoName.classList.add("todo-name");
//             todoName.textContent = todoItem.title;
//             const todoDueDate = document.createElement("div");
//             todoDueDate.classList.add("todo-due-date");
//             todoDueDate.textContent = todoItem.dueDate;
//             todo.append(todoMark, todoName, todoDueDate);
//             projectTodoList.appendChild(todo);
//         })
//         project.append(projectNameContainer, projectTodoList);
//         projectListContainer.appendChild(project);
//     });
// };

function projectController(projectList){
    const projectListContainer = document.querySelector(".project-list");
    projectListContainer.replaceChildren();
    projectList.forEach(projectItem => {
        const project = document.createElement("div");
        project.classList.add("project");
        const projectNameContainer = document.createElement("div");
        projectNameContainer.classList.add("project-name-container");
        const projectName = document.createElement("div");
        projectName.classList.add("project-name");
        projectName.textContent = projectItem.name;
        const projectAddTodoBtn = document.createElement("button");
        projectAddTodoBtn.classList.add("project-add-todo-btn");
        projectAddTodoBtn.command = "show-modal";
        projectAddTodoBtn.commandForElement = document.getElementById("project-add-todo-dialog");
        projectAddTodoBtn.textContent = "+";
        const projectAddTodoBtnIcon = document.createElement("img");
        projectAddTodoBtnIcon.classList("add-icon");
        projectAddTodoBtnIcon.src = addIcon;
        const projectEditBtn = document.createElement("button");
        projectEditBtn.classList.add("project-edit-btn");
        projectEditBtn.textContent = "edit_icon";
        projectNameContainer.append(projectName, projectAddTodoBtn, projectEditBtn);
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
            const todoEditBtn = document.createElement("button");
            todoEditBtn.classList.add("todo-edit-btn");
            todoEditBtn.textContent = "edit_icon";
            const todoRemoveBtn = document.createElement("button");
            todoRemoveBtn.classList.add("todo-remove-btn");
            todoRemoveBtn.textContent = "remove_icon";
            todo.append(todoMark, todoName, todoDueDate, todoEditBtn, todoRemoveBtn);
            projectTodoList.appendChild(todo);
        })
        project.append(projectNameContainer, projectTodoList);
        projectListContainer.appendChild(project);
    });
};
function projectTodoListController(projectList){
    projectList.forEach((projectItem)=>{
        // console.log(Array.from(document.querySelectorAll(".project-name")).find(projectNameDiv=>projectNameDiv.textContent==projectItem.name).closest(".project").querySelector(".project-todo-list"));
        const projectTodoListContainer = Array.from(document.querySelectorAll(".project-name")).find(projectNameDiv=>projectNameDiv.textContent==projectItem.name).closest(".project").querySelector(".project-todo-list");
        projectTodoListContainer.replaceChildren();
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
            projectTodoListContainer.appendChild(todo);
        });

    })
    
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

//edit, delete buttons; add project/todo button; change html structure; maybe add interface at the end of every project/buttons
export { projectController, projectTodoListController, mainController };