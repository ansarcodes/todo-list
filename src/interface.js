function projectController(projectList, container){
    projectList.forEach(project => {
        container.appendChild(project);
    });
}