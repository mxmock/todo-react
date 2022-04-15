import Todo from "../todo/Todo";
import mc from "./todos.module.scss";

const Todos = (props) => {
  const { allTodos, onCompleteTodo, onUpdateTodo } = props;

  const handleCompleteTodo = (id) => {
    onCompleteTodo(id);
  };

  const handleUpdateTodo = (id, value) => {
    onUpdateTodo(id, value);
  };

  return (
    <ul className={mc.container}>
      {allTodos.map((todo) => (
        <Todo
          key={todo.id}
          name={todo.name}
          id={todo.id}
          isCompleted={todo.isCompleted}
          onComplete={handleCompleteTodo}
          onUpdate={handleUpdateTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
