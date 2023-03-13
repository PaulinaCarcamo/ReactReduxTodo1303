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
        <div>
            {todos.length === 0
                ? <div><h5>Looks like you&apos;re absolutely free today!</h5></div>
                :
                <ul className='list-group'>

                    {todos.map((todo) => (
                        <TodoItem id={todo.id} label={todo.label} completed={todo.completed} />
                    ))}
                </ul>
            }
        </div>
    );
};

export default TodoForm;