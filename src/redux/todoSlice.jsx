import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getTodosAsync = createAsyncThunk(
    'todos/getTodosAsync',
    async () => {
        const resp = await fetch('https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos');
        if (resp.ok) {
            const todos = await resp.json();
            return { todos };
        }
    }
);

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: new Date(),
                label: action.payload.label,
                completed: false,
            };
            state.push(todo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
    },
    extraReducers: {
        [getTodosAsync.fulfilled]: (state, action) => {
            return action.payload.todos;
        },
    },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;