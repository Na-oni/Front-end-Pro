import { configureStore } from '@reduxjs/toolkit';

import todo_list from './todo-list';

const store = configureStore({
    reducer: {
        todo_list: todo_list,
    },
});

export default store;
