class todoItem {
    constructor(title, description, dueDate, priority){
        title = this.title;
        description = this.description;
        dueDate = this.dueDate;
        priority = this.priority;
        this.isComplete = false;
    };
    markComplete() {
        this.isComplete = !this.isComplete;
    }
};

export { todoItem };