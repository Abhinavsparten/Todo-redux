import React, { useRef } from 'react';

type AddTodoProps = {
  onAddTodo: (text: string) => void;
};

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value.trim(); 
    if (inputValue) {
      onAddTodo(inputValue); 
      inputRef.current.value = ''; 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-7 flex gap-2">
      <input
        type="text"
        ref={inputRef} 
        placeholder="Add a new todo..."
        className="flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
