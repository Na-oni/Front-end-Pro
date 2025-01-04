import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Main from './Main';

describe('TODO App', () => {
    test('should display the correct title', () => {
        render(<Main />);
        const title = screen.getByText(/TODO/i);
        expect(title).toBeInTheDocument();
    });

    test('should allow input of both letters and numbers in the text field', () => {
        render(<Main />);
        const input = screen.getByPlaceholderText(/Enter a task/i);

        fireEvent.change(input, { target: { value: '123' } });
        expect(input.value).toBe('123');

        fireEvent.change(input, { target: { value: 'abc' } });
        expect(input.value).toBe('abc');
    });

    test('should show error if trying to add a task without text', () => {
        render(<Main />);
        const addButton = screen.getByText(/Add Task/i);
        const input = screen.getByPlaceholderText(/Enter a task/i);

        fireEvent.click(addButton);
        expect(screen.queryByText(/Field cannot be empty/i)).toBeInTheDocument();
    });

    test('should add a new task to the list when text is entered', () => {
        render(<Main />);
        const input = screen.getByPlaceholderText(/Enter a task/i);
        const addButton = screen.getByText(/Add Task/i);

        fireEvent.change(input, { target: { value: 'New Task' } });
        fireEvent.click(addButton);

        const newTask = screen.getByText('New Task');
        expect(newTask).toBeInTheDocument();
    });

    test('should render task and delete it', () => {
        render(<Main />);

        // Добавляем задачу
        const input = screen.getByPlaceholderText(/Enter a task/i);
        fireEvent.change(input, { target: { value: 'Task to remove' } });
        const addButton = screen.getByText(/Add Task/i);
        fireEvent.click(addButton);

        // Проверяем, что задача отобразилась
        expect(screen.getByText('Task to remove')).toBeInTheDocument();

        // Находим кнопку Delete и нажимаем
        const deleteButton = screen.getByText(/Delete/i);
        fireEvent.click(deleteButton);

        // Проверяем, что задача была удалена
        expect(screen.queryByText('Task to remove')).not.toBeInTheDocument();
    });
});
