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

  return <Todos allTodos={TODOS} />;
};

const Todos = (props) => {
  const { allTodos } = props;

  return (
    <ul className="todos">
      {allTodos.map((todo) => (
        <Todo key={todo.id} name={todo.name} />
      ))}
    </ul>
  );
};

const Todo = (props) => {
  // const name = props.name;
  const { name } = props;

  return <li className="todo">{name}</li>;
};

// Rendu dans le DOM
ReactDOM.render(<App />, document.getElementById("root"));
