import React, { useState, useRef } from 'react';

type TodoProps = {
  todo: { id: number; text: string; completed: boolean };
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
  onEditTodo: (id: number, newText: string) => void;
};

const Todo: React.FC<TodoProps> = ({ todo, onDeleteTodo, onToggleTodo, onEditTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const editInputRef = useRef<HTMLInputElement>(null); // Create a ref for the input field

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newText = editInputRef.current?.value.trim();
    if (newText) {
      onEditTodo(todo.id, newText);
      setIsEditing(false); 
    }
  };

  return (
    <div className="bg-gray-100 p-2 rounded-lg shadow-md mt-3">
      <li className="flex justify-between items-center ">
        {isEditing ? (
          <form onSubmit={handleEditSubmit} className="flex-grow flex gap-3 ">
            <input
              type="text"
              ref={editInputRef}
              defaultValue={todo.text} // Set initial value based on the todo text
              className="flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Edit todo..."
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 me-2 text-white rounded shadow "
            >
              Save
            </button>
          </form>
        ) : (
          <span
            onClick={() => onToggleTodo(todo.id)}
            className={`flex-grow cursor-pointer text-lg ${
              todo.completed ? 'line-through text-red-500' : 'text-gray-800'
            }`}
          >
            {todo.text}
          </span>
        )}
        <div className="flex items-center gap-3">
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded shadow "
            >
              Edit
            </button>
          )}
          <button
            onClick={() => onDeleteTodo(todo.id)}
            className="px-4 py-2 bg-red-600 text-white rounded shadow "
          >
            Delete
          </button>
        </div>
      </li>
    </div>
  );
};

export default Todo;
