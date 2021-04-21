import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { ToDoSelect, changeFilter } from "../ToDoSlice";
import filterConfig from "../../../config/filter";

export default function Filter() {
    let dispatch = useDispatch();
    let { filter } = useSelector(ToDoSelect);

    const onChangeFilter = (type) => {
        dispatch(changeFilter(type));
    }

    return (
        <div className="toDoFilter">
            <div className="toDoFilter-box">
                <a 
                    onClick={() => onChangeFilter(filterConfig.ALL)} 
                    className={classNames('toDoFilter-item', {'active': filter === filterConfig.ALL })}
                >
                    All
                </a>
                <a 
                    onClick={() => onChangeFilter(filterConfig.ACTIVE)} 
                    className={classNames('toDoFilter-item', {'active': filter === filterConfig.ACTIVE })}
                >
                    Active
                </a>
                <a 
                    onClick={() => onChangeFilter(filterConfig.COMPLETED)} 
                    className={classNames('toDoFilter-item', {'active': filter === filterConfig.COMPLETED })}
                >
                    Completed
                </a>
            </div>
        </div>
    );
}