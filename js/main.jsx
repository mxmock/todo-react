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
      isCompleted: false,
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

  return <TodosList todos={TODOS} />;
};

const TodosList = (props) => {
  // const todos = props.todos;
  const { todos } = props;

  // version basique
  const getList = () => {
    const list = [];
    todos.forEach((todo) => {
      list.push(<TodoItem key={todo.id} name={todo.name} />);
    });
    return list;
  };

  // version moderne
  // const getList = () => todos.map((t) => <TodoItem key={t.id} name={t.name} />);

  return <ul className="todos">{getList()}</ul>;
};

const TodoItem = (props) => {
  // const name = props.name;
  const { name } = props;

  return (
    <li className="todo">
      <span>{name}</span>
    </li>
  );
};

// Rendu dans le DOM
ReactDOM.render(<App />, document.getElementById("root"));
