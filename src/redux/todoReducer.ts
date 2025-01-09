type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const initialState: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

const todosReducer = (state = initialState, action: any): Todo[] => {
  let updatedState: Todo[];
  switch (action.type) {
    case 'ADD_TODO':
      updatedState = [
        ...state,
        { id: Date.now(), text: action.payload.text, completed: false },
      ];
      localStorage.setItem('todos', JSON.stringify(updatedState));
      return updatedState;

    case 'DELETE_TODO':
      updatedState = state.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem('todos', JSON.stringify(updatedState)); 
      return updatedState;

    case 'TOGGLE_TODO':
      updatedState = state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem('todos', JSON.stringify(updatedState)); 
      return updatedState;

    case 'EDIT_TODO':
      updatedState = state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.newText } : todo
      );
      localStorage.setItem('todos', JSON.stringify(updatedState)); 
      return updatedState;

    default:
      return state;
  }
};

export default todosReducer;
