export default function todoManipulation(todo){
    const markComplete = () => {
        todo.isComplete = !todo.isComplete;
    };
    return { markComplete };
};