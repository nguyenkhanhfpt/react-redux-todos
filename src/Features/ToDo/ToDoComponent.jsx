import { useSelector } from "react-redux";
import { ToDoSelect } from "./ToDoSlice";
import InputAdd from "./Components/InputAdd";
import TaskItem from "./Components/TaskItem";
import Filter from "./Components/Filter";
import filterConfig from "../../config/filter";

export default function ToDoComponent() {
    let { list, filter } = useSelector(ToDoSelect);
    let allItem;

    if (filter === filterConfig.ACTIVE) {
        allItem = list.filter(item => {
            return item.isCompleted === false;
        });
    } else if (filter === filterConfig.COMPLETED) {
        allItem = list.filter(item => {
            return item.isCompleted;
        });
    } else {
        allItem = list.filter(item => {
            return item;
        });
    }

    return (
        <div className="ToDoComponent">
            <h2 className="ToDoComponent-title">ToDos</h2>

            <div className="ToDoComponent-box">
                <InputAdd />

                { allItem.length === 0 && <p className="nothing">Nothing here</p> }

                { allItem.map((item, index) => (<TaskItem item={item} key={index} />)) }            
                <Filter />
            </div>
        </div>
    )
}
