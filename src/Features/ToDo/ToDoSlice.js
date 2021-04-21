import { createSlice } from "@reduxjs/toolkit";
import filterConfig from "../../config/filter";

export const slice = createSlice({
    name: "toDo",
    initialState: {
        list: [],
        filter: filterConfig.ALL
    },
    reducers: {
        addNewTask: (state, payload) => {
            state.list.unshift(payload.payload);
        },
        toggleTask: (state, payload) => {
            let index = payload.payload;

            state.list = [
                ...state.list.slice(0, index),
                {
                    ...state.list[index],
                    isCompleted: !state.list[index].isCompleted
                },
                ...state.list.slice(index + 1)
            ];
        },
        deleteTask: (state, payload) => {
            let index = payload.payload;

            state.list = [
                ...state.list.slice(0, index),
                ...state.list.slice(index + 1)
            ];
        },
        changeFilter: (state, payload) => {
            state.filter = payload.payload
        }
    }
})

export const { addNewTask, toggleTask, deleteTask, changeFilter } = slice.actions;

export const ToDoSelect = state => state.toDo;

export default slice.reducer;