import { delete_start, delete_success, delete_failure } from '../todo-list';

export const delete_task = (id) => {
    return async (dispatch) => {
        dispatch(delete_start());

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE'
            });

            if(response.status === 200) {
                console.log(id);
                dispatch(delete_success(id));
            }
        } catch (error) {
            dispatch(delete_failure(error.message));
        }
    };
};
