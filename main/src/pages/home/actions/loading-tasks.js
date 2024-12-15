import { fetch_start, fetch_success, fetch_failure } from '../todo-list';

export const fetch_tasks = () => {
    return async (dispatch) => {
        dispatch(fetch_start());

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=4');
            const data = await response.json();
            const tasks = data.map((item) => ({ id: item.id, title: item.title, completed: item.completed }));
            console.log(tasks);
            dispatch(fetch_success(tasks));
        } catch (error) {
            dispatch(fetch_failure(error.message));
        }
    };
};
