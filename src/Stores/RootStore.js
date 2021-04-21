import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from "../Features/ToDo/ToDoSlice";

export default configureStore({
    reducer: {
        toDo: ToDoReducer
    }
})
