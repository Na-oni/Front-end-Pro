import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [{ text: 'task 1', completed: true }, { text: 'task 2', completed: false }],
        };
    }

    add_task = (object) => {
        this.setState((state) => ({
            tasks: [ ...state.tasks, { text: object.task, completed: false } ]
        }));
    };

    remove_task = (index) => {
        this.setState((state) => ({
            tasks: state.tasks.filter((_, i) => i !== index),
        }));
    };

    toggle_task_status = (index) => {
        this.setState((state) => ({
            tasks: state.tasks.map((task, i) =>
                i === index ? { ...task, completed: !task.completed } : task
            ),
        }));
    };

    render() {
        const validation_schema = Yup.object({
            task: Yup.string()
                .trim()
                .min(5, "Задача должна содержать минимум 5 символа")
                .max(100, "Задача не может быть длиннее 100 символов")
                .required("Поле задачи обязательно"),
        });

        return (
            <>
                <Formik initialValues={{task: ''}} validationSchema={validation_schema} onSubmit={(values, { setSubmitting }) => {console.log(values);setSubmitting(true);}}>
                    {({isSubmitting}) => (
                        <Form>
                            <input name='task' type="text"/>
                            <ErrorMessage name="task" component="div" className="error"/>
                            <button type="submit" disabled={isSubmitting}>Отправить</button>
                        </Form>
                    )}
                </Formik>
            </>
        );
    }
}

export default TodoList;
