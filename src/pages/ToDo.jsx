import ToDoComponent from "../Features/ToDo/ToDoComponent";
import "../Features/ToDo/ToDo.css";

export default function ToDo() {
    return (
        <div className="toDoPage">
            <div className="toDo">
                <ToDoComponent />
            </div>
        </div>
    );
}