function projectController(projectList, container){
    projectList.forEach(project => {
        container.appendChild(project);
    });
};
function todoController(todoList, container){
    todoList.forEach(todo => {
        container.appendChild(todo);
    })
}