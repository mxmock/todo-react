const App = () => {
  const TODOS = [
    {
      id: 1,
      name: "todo 1",
      isCompleted: false,
    },
    {
      id: 2,
      name: "todo 2",
      isCompleted: true,
    },
    {
      id: 3,
      name: "todo 3",
      isCompleted: false,
    },
    {
      id: 4,
      name: "todo 4",
      isCompleted: false,
    },
    {
      id: 5,
      name: "todo 5",
      isCompleted: false,
    },
  ];

  const [todos, setTodos] = React.useState(TODOS);

  const updateList = (list) => {
    setTodos([...list]);
  };

  return <Todos allTodos={todos} markAsCompleted={updateList} />;
};

const Todos = (props) => {
  const { allTodos, markAsCompleted } = props;

  const completeTodo = (id) => {
    const newTodos = allTodos.map((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      return todo;
    });
    markAsCompleted(newTodos);
  };

  return (
    <ul className="todos">
      {allTodos.map((todo) => (
        <Todo
          key={todo.id}
          name={todo.name}
          id={todo.id}
          isCompleted={todo.isCompleted}
          completeTodo={completeTodo}
        />
      ))}
    </ul>
  );
};

const Todo = (props) => {
  const { name, id, isCompleted, completeTodo } = props;

  const handleClick = () => {
    completeTodo(id);
  };

  return (
    <li
      className={isCompleted ? "todo todo--completed" : "todo"}
      onClick={handleClick}
    >
      {name}
    </li>
  );
};

// Rendu dans le DOM
ReactDOM.render(<App />, document.getElementById("root"));
