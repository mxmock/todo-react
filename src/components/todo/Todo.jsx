import mc from "./todo.module.scss";

const Todo = (props) => {
  const { name, id, isCompleted, completeTodo } = props;

  const handleClick = () => {
    completeTodo(id);
  };

  return (
    <li
      className={isCompleted ? `${mc.todo} ${mc.completed}` : `${mc.todo}`}
      onClick={handleClick}
    >
      {name}
    </li>
  );
};

export default Todo;
