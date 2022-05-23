import React from 'react';
import './App.css';
import Input from './components/input';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';

function App() {
  const todoList = useSelector(selectTodoList);

  return (
    <div className='app'>
      <h1 className='app__header'>TO-DO LIST APP</h1>
      <div className='app__container'>
        <Input />
        <div className='app__todoContainer'>
          {todoList.map((item) => (
            <TodoItem
              name={item.item}
              done={item.done}
              key={item.id}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
