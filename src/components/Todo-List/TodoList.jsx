import { TodoEdit } from './TodoEdit';
import './TodoList.scss';
import PropTypes from 'prop-types';
import { TodoTask } from './TodoTask';

export const TodoList = ({
  todos,
  onRemoveTodo,
  onDoneTodo,
  onEditTodo,
  onEditToggle,
}) => {
  return (
    <div className="List">
      <ul className="List-ul">
        {todos.map((todo) =>
          todo.edited ? (
            <TodoEdit
              key={todo.id}
              todo={todo}
              onEditTodo={(todo) => onEditTodo(todo)}
            />
          ) : (
            <TodoTask
              key={todo.id}
              todo={todo}
              onRemoveTodo={(id) => onRemoveTodo(id)}
              onDoneTodo={(id) => onDoneTodo(id)}
              onEditToggle={(edited) => onEditToggle(edited)}
            />
          )
        )}
      </ul>
    </div>
  );
};

TodoList.protoType = {
  todos: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onDoneTodo: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func.isRequired,
  onEditToggle: PropTypes.func.isRequired,
};
