import React from 'react';
import './index.css';
import './App.css';
import TodoList from './Components/TodoList.tsx';
import AddTodo from './Components/AddTodo.tsx';


const App: React.FC = () => {

  return (
  
      <div className="min-h-screen bg-gray-200 flex justify-center p-10">
      <div className="bg-white rounded shadow-lg p-9 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Todo App</h1>
     <AddTodo/>
     <TodoList/>
     </div>
     </div>
  );
};

export default App;
