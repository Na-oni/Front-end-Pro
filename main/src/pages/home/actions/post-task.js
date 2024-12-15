import { post_start, post_success, post_failure } from '../todo-list';

export const post_task = (title) => {
    return async (dispatch) => {
        dispatch(post_start());

        try {
            const task = { title: title, completed: false };

            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify( task )
            });

            if(response.status === 201) {
                dispatch(post_success(title));
            }
        } catch (error) {
            dispatch(post_failure(error.message));
        }
    };
};
