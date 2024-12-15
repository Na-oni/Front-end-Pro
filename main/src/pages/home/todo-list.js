import { createSlice } from "@reduxjs/toolkit";

const todo_list = createSlice({
    name: "todo_list",
    initialState: { tasks: [ { name: "task 0", completed: false }, { name: "task 1", completed: false }] },
    reducers: {
        add: (state, action) => {
            state.tasks.push( { name: action.payload, completed: false } );
        }
    }
});

export const { add } = todo_list.actions;
export default todo_list.reducer;