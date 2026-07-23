function projectController(projectList){
    const projectListContainer = document.querySelector(".project-list");
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
            const todoName = document.createElement("div");
            todoName.classList.add("todo-name");
            const todoDueDate = document.createElement("div");
            todoDueDate.classList.add("todo-due-date");
            todo.appendChildren(todoName, todoDueDate);
        })
        project.appendChildren(projectName, projectTodoList);
        projectListContainer.appendChild(project);
    });
};
function todoController(todoList, container){
    todoList.forEach(todo => {
        container.appendChild(todo);
    })
}