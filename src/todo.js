class todoItem {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isComplete = false;
    };
    markComplete() {
        this.isComplete = !this.isComplete;
    }
};

export { todoItem };