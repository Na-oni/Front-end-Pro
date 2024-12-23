import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import todo_list from './todo-list';
import authorization from '../../store/authorization';

const store = configureStore({
    reducer: {
        todo_list: todo_list,
        auth: authorization,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;