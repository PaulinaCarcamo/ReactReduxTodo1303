import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';

const AddTodo = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        if (value) {
            dispatch(
                addTodo({
                    label: value,
                })
            );
        }
    };

    return (
        <form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
            <h4 className='mt-3'>THINGS TO DO</h4>
            <hr />
            <label className='sr-only'>Add todo</label>
            <input
                type='text'
                className='form-control mb-2 mr-sm-2'
                placeholder='Study...'
                value={value}
                onChange={(event) => setValue(event.target.value)}
            ></input>

            <button type='submit' className='btn btn-primary mb-2'>
                Submit
            </button>
        </form>
    );
};

export default AddTodo;
