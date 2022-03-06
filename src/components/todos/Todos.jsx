import Todo from "../todo/Todo";
import mc from "./todos.module.scss";

const Todos = (props) => {
  const { allTodos, markAsCompleted } = props;

  const completeTodo = (id, list) => {
    return list.map((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      return todo;
    });
  };

  const handleCompleteTodo = (id) => {
    markAsCompleted(completeTodo(id, allTodos));
  };

  return (
    <ul className={mc.todos}>
      {allTodos.map((todo) => (
        <Todo
          key={todo.id}
          name={todo.name}
          id={todo.id}
          isCompleted={todo.isCompleted}
          completeTodo={handleCompleteTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
