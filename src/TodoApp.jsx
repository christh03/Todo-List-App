import { Form, Header, TodoList } from './components';
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
