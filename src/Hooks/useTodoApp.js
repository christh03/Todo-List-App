import { useEffect, useReducer } from 'react';
import { todoReducer } from '../todoReducer';

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (todo) => {
    dispatch({
      type: '[TODO] Add Todo',
      payload: todo,
    });
  };

  const handleRemoveTodo = (id) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id,
    });
  };

  const handleDoneTodo = (id) => {
    dispatch({
      type: '[TODO] Done Todo',
      payload: id,
    });
  };

  const handleEditTodo = (todo) => {
    dispatch({
      type: '[EDIT] Edit Todo',
      payload: todo,
    });
  };

  const handleEditToggle = (id) => {
    dispatch({
      type: '[TODO] Toggle',
      payload: id,
    });
  };

  return {
    handleAddTodo,
    handleRemoveTodo,
    handleDoneTodo,
    handleEditTodo,
    handleEditToggle,
    todos,
  };
};
