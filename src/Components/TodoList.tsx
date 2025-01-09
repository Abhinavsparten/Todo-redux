import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, editTodo } from '../redux/actions.ts';
import Todo from './Todo.tsx';

const TodoList: React.FC = () => {
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleEditTodo = (id: number, newText: string) => {
    dispatch(editTodo(id, newText));
  };

  return (
   
        <ul className="divide-y divide-gray-300">
          {todos.map((todo: any) => (
            <Todo
              key={todo.id}
              todo={todo}
              onDeleteTodo={handleDeleteTodo}
              onToggleTodo={handleToggleTodo}
              onEditTodo={handleEditTodo}
            />
          ))}
        </ul>

  );
};

export default TodoList;
