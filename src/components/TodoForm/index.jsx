import React, { useEffect } from 'react';
import TodoItem from '../TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../../redux/todoSlice';

const TodoForm = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(getTodosAsync());
    }, [dispatch]);

    return (
        <ul className='list-group'>
            {todos.map((todo) => (
                // <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
                <TodoItem id={todo.id} label={todo.label} completed={todo.completed} />
            ))}
        </ul>
    );
};

export default TodoForm;