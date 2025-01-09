export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  payload: { text },
});

export const deleteTodo = (id: number) => ({
  type: 'DELETE_TODO',
  payload: { id },
});

export const toggleTodo = (id: number) => ({
  type: 'TOGGLE_TODO',
  payload: { id },
});

export const editTodo = (id: number, newText: string) => ({
  type: 'EDIT_TODO',
  payload: { id, newText },
});