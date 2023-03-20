import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export const useForm = (onAddTodo) => {
  const [description, setDescription] = useState('');

  const onInputChange = ({ target }) => {
    setDescription(target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: uuidv4(),
      description,
      done: false,
      edited: false,
    };
    onAddTodo(newTodo);
    setDescription('');
  };

  return {
    onInputChange,
    onFormSubmit,
    description,
  };
};

useForm.protoType = {
  onAddTodo: PropTypes.func.isRequired,
};
