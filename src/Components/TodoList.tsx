import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo, editTodo } from '../redux/actions.ts';
import AddTodo from './AddTodo.tsx';
import Todo from './Todo.tsx';

const TodoList: React.FC = () => {
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };

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
    <div className="min-h-screen bg-gray-200 flex justify-center p-10">
      <div className="bg-white rounded shadow-lg p-9 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Todo App</h1>
        <AddTodo onAddTodo={handleAddTodo} />
        <ul className="divide-y divide-gray-300 ">
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
      </div>
    </div>
  );
};

export default TodoList;