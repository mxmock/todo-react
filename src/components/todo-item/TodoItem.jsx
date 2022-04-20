import mc from "./todo-item.module.scss";

const TodoItem = (props) => {
  const { id, name, isCompleted, onComplete } = props;

  const handleTodoClick = () => {
    onComplete(id);
  };

  return (
    <li
      className={
        isCompleted ? `${mc.container} ${mc.completed}` : `${mc.container}`
      }
    >
      <span className={mc.name} onClick={handleTodoClick}>
        {name}
      </span>
    </li>
  );
};

export default TodoItem;
