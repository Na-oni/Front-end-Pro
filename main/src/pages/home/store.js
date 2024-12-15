import { configureStore } from '@reduxjs/toolkit';
import counter from './counter';

const store = configureStore({
    reducer: {
        counter: counter,
    },
});

export default store;
