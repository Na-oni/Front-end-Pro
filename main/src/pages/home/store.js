import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import todo_list from './todo-list';


const store = configureStore({
    reducer: {
        todo_list: todo_list,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;