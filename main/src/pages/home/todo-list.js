import { createSlice } from "@reduxjs/toolkit";

const todo_list = createSlice({
    name: "todo_list",
    initialState: { tasks: [], loading: false, error: null },
    reducers: {
        fetch_start: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetch_success: (state, action) => {
            state.loading = false;
            state.tasks = action.payload;
        },
        fetch_failure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        post_start: (state) => {
            state.loading = true;
            state.error = null;
        },
        post_success: (state, action) => {
            state.loading = false;
            state.tasks = [...state.tasks, { id: state.tasks.length + 1,title: action.payload, completed: false }];
        },
        post_failure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        delete_start: (state) => {
            state.loading = true;
            state.error = null;
        },
        delete_success: (state, action) => {
            state.loading = false;
            console.log(action.payload);
            state.tasks = state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        delete_failure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        toggle_task_status: (state, action) => {
            state.tasks = state.tasks.map((task) => task.id === action.payload ? { ...task, completed: !task.completed }: task);
        }
    }
});

export const { fetch_start, fetch_success, fetch_failure, post_start, post_success, post_failure, delete_start, delete_success, delete_failure, toggle_task_status } = todo_list.actions;
export default todo_list.reducer;