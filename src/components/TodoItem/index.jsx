import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../../redux/todoSlice';

const TodoItem = ({ id, label, completed }) => {
    const dispatch = useDispatch();

    const handleCheckboxClick = () => {
        dispatch(toggleComplete({ id, completed: !completed }));
    };

    const handleDeleteClick = () => {
        dispatch(deleteTodo({ id }));
    };

    return (

        <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
            <div className='d-flex justify-content-between'>
                <span className='d-flex align-items-center'>
                    <input
                        type='checkbox'
                        className='mx-2'
                        onClick={handleCheckboxClick}
                        checked={completed}
                    ></input>
                    {label}
                </span>
                <button onClick={handleDeleteClick} className='btn btn-danger'>
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoItem;