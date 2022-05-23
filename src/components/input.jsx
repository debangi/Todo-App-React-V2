import React, { useState } from 'react';
import './input.css';

import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoSlice';

const Input = () => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
    setInput('');
  };

  return (
    <form className='input'>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type='submit'
        className='input__button'
        onClick={addTodo}
        disabled={!input.trim().length}
      >
        Add!
      </button>
    </form>
  );
};

export default Input;
