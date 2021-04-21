import { useSelector, useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames";
import { ToDoSelect, toggleTask, deleteTask } from "../ToDoSlice";

export default function TaskItem(props) {
    let dispatch = useDispatch();
    let { list } = useSelector(ToDoSelect);
    let { item } = props;

    const toggleItem = (item) => {
        let indexItem = list.indexOf(item);

        dispatch(toggleTask(indexItem));
    }

    const onDeleteTask = (item) => {
        let indexItem = list.indexOf(item);

        dispatch(deleteTask(indexItem));
    }

    return (
        <div className={classNames("TaskItem", {'TaskItem-completed' : item.isCompleted})}>
            <Form.Check
                checked={item.isCompleted }
                onChange={() => toggleItem(item)}
            />
            <p className="TaskItem-work" onClick={() => toggleItem(item)}>{ item.task }</p>
            <FontAwesomeIcon onClick={() => onDeleteTask(item)} className="TaskItem-trash" icon={faTrash} />
        </div>
    )
}