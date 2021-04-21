import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { addNewTask } from "../ToDoSlice";

export default function InputAdd() {
    let dispatch = useDispatch();
    let inputRef = useRef();

    const changeInput = (event) => {
        if (event.keyCode === 13) {
            doAddNewTask();
        }
    }

    const doAddNewTask = () => {
        let taskName = inputRef.current.value;

        if (!taskName) {
            return;
        }

        let newTask = {
            task: taskName,
            isCompleted: false
        };

        dispatch(addNewTask(newTask));

        inputRef.current.value = "";
    }

    return (
        <div className="InputAdd">
            <Form onSubmit={e => e.preventDefault()}>
                <Form.Group>
                    <div className="d-flex">
                        <Form.Control
                            ref={inputRef}
                            type="text"
                            placeholder="Add new task"
                            onKeyUp={changeInput} 
                        />
                        <Button onClick={doAddNewTask} type="button" className="input-submit">Add new</Button>
                    </div>
                </Form.Group>
            </Form>
        </div>
    )
}