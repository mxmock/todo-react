import mc from "./todos-list.module.scss";
import TodoItem from "../todo-item/TodoItem";

const TodosList = (props) => {
  const { todos, onCompleteTodo, onUpdateTodo } = props;

  const handleComplete = (id) => {
    onCompleteTodo(id);
  };

  const handleUpdateTodo = (id, value) => {
    onUpdateTodo(id, value);
  };

  const getList = () =>
    todos.map((t) => (
      <TodoItem
        key={t.id}
        id={t.id}
        name={t.name}
        isCompleted={t.isCompleted}
        onComplete={handleComplete}
        onUpdate={handleUpdateTodo}
      />
    ));

  return <ul className={mc.container}>{getList()}</ul>;
};

export default TodosList;
