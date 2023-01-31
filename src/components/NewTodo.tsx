import React, { useRef } from 'react';

import './NewTodo.css';

interface NewTodoProps {
  onSubmit: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = ({ onSubmit }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;

    onSubmit(enteredText);

    textInputRef.current!.value = '';
  };

  return <form onSubmit={todoSubmitHandler}>
    <div>
      <label htmlFor='todo-text'>Todo text</label>
      <input type="text" id="todo-text" ref={textInputRef} />
    </div>
    <button type="submit">Add todo</button>
  </form>
};

export default NewTodo;
