import { Form, Header, TodoList } from './components';
import PropTypes from 'prop-types';
import { useTodoApp } from './Hooks/useTodoApp';
import './TodoApp.scss';

export const TodoApp = () => {
  const {
    handleAddTodo,
    handleRemoveTodo,
    handleDoneTodo,
    handleEditTodo,
    handleEditToggle,
    todos,
  } = useTodoApp();
  return (
    <div className="Container">
      <section className="Container-section">
        <Header />
        <main className="Main">
          <Form onAddTodo={handleAddTodo} />
          <TodoList
            todos={todos}
            onRemoveTodo={handleRemoveTodo}
            onDoneTodo={handleDoneTodo}
            onEditTodo={handleEditTodo}
            onEditToggle={handleEditToggle}
          />
        </main>
      </section>
    </div>
  );
};

TodoApp.protoType = {
  handleAddTodo: PropTypes.func.isRequired,
  handleRemoveTodo: PropTypes.func.isRequired,
  handleDoneTodo: PropTypes.func.isRequired,
  handleEditTodo: PropTypes.func.isRequired,
  handleEditToggle: PropTypes.func.isRequired,
  todos: PropTypes.object.isRequired,
};
