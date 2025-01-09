import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions.ts';  

const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = inputRef.current?.value.trim(); 

    if (text) {
      dispatch(addTodo(text));   
      if (inputRef.current) {
        inputRef.current.value = ''; 
      }
    }
  };

  return (

    <form onSubmit={handleSubmit} className="mb-4">
      <input
        ref={inputRef}  t
        type="text"
        placeholder="Enter todo"
        className="p-2 border rounded w-full"
      />
      <div className='flex justify-center mt-4'>
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded w-50 ">
        Add Todo
      </button>
      </div>
    </form>

  );
};

export default AddTodo;
