import React from 'react';
import { useSelector } from 'react-redux';

const CompletedTodo = () => {
    const todos = useSelector((state) =>
        state.todos.filter((todo) => todo.completed === true)
    );

    return (
        <div>
            <h4 className='mt-3'>Total complete items: {todos.length}</h4>
        </div>
    );
};

export default CompletedTodo;

