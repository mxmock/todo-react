import mc from "./todos-list.module.scss";
import TodoItem from "../todo-item/TodoItem";

const TodosList = (props) => {
  const { todos } = props;

  const getList = () =>
    todos.map((t) => (
      <TodoItem
        key={t.id}
        id={t.id}
        name={t.name}
        isCompleted={t.isCompleted}
      />
    ));

  return <ul className={mc.container}>{getList()}</ul>;
};

export default TodosList;
