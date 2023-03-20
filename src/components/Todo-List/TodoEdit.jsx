import { useState } from 'react';
import PropTypes from 'prop-types';

export const TodoEdit = ({ todo, onEditTodo }) => {
  const [description, setInputValue] = useState(todo.description);

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;
    onEditTodo({
      ...todo,
      description,
    });
  };

  return (
    <form className="List-form" onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Update Task"
        className="List-input"
        value={description}
        required
        onChange={onInputChange}
      />

      <button className="List-btn-save" type="submit">
        Save
      </button>
    </form>
  );
};

TodoEdit.propTypes = {
  todo: PropTypes.object.isRequired,
  onEditTodo: PropTypes.func.isRequired,
};
