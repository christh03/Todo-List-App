import { useState } from 'react';

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
