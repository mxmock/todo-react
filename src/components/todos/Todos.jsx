import Todo from "../todo/Todo";
import mc from "./todos.module.scss";

const Todos = (props) => {
  const { allTodos, markAsCompleted, updateTodo } = props;

  const completeTodo = (id, list) => {
    return list.map((todo) => {
      if (todo.id === id) return { ...todo, isCompleted: !todo.isCompleted };
      return todo;
    });
  };

  // const updateTodoValue = (id, value, list) => {
  // return list.map((todo) => {
  // if (todo.id === id) return { ...todo, name: value };
  // return todo;
  // });
  // };

  const updateTodoValue = (id, name, list) => list.map((todo) => (todo.id === id ? { ...todo, name } : todo));

  const handleCompleteTodo = (id) => {
    markAsCompleted(completeTodo(id, allTodos));
  };

  const handleUpdateTodo = (id, value) => {
    updateTodo(updateTodoValue(id, value, allTodos));
  };

  return (
    <ul className={mc.container}>
      {allTodos.map((todo) => (
        <Todo
          key={todo.id}
          name={todo.name}
          id={todo.id}
          isCompleted={todo.isCompleted}
          completeTodo={handleCompleteTodo}
          onUpdate={handleUpdateTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
