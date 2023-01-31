import React from 'react';

import { Todo } from '../todo.model';

import './TodoList.css';

interface TodoListProps {
  items: Todo[]
  onDelete: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ items, onDelete }) => {
  return <ul>
    {items.map(item => (
      <li key={item.id}>
        <span>{item.text}</span>
        <button type="button" onClick={onDelete.bind(null, item.id)}> delete</button>
      </li>))
    }
  </ul >
};

export default TodoList;
