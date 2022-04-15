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

  // version détaillée
  const handleCompleteTodo = (id) => {
    const updateOneTodo = (todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      } else {
        return todo;
      }
    };

    const updateAllTodos = (previousList) => {
      const newList = previousList.map(updateOneTodo);
      return newList;
    };

    setTodos(updateAllTodos);
  };

  // version synthétique
  // const handleCompleteTodo = (id, name) => {
  // setTodos((p) =>
  // p.map((t) => (t.id === id ? { ...t, isCompleted: !t.isCompleted } : t))
  // );
  // };

  const [todos, setTodos] = React.useState(TODOS);

  return <TodosList todos={todos} onCompleteTodo={handleCompleteTodo} />;
};

const TodosList = (props) => {
  const { todos, onCompleteTodo } = props;

  const handleComplete = (id) => {
    onCompleteTodo(id);
  };

  const getList = () =>
    todos.map((t) => (
      <TodoItem
        key={t.id}
        id={t.id}
        name={t.name}
        isCompleted={t.isCompleted}
        onComplete={handleComplete}
      />
    ));

  return <ul className="todos">{getList()}</ul>;
};

const TodoItem = (props) => {
  const { id, name, isCompleted, onComplete } = props;

  const handleTodoClick = () => {
    onComplete(id);
  };

  return (
    <li className={isCompleted ? "todo todo--completed" : "todo"}>
      <span onClick={handleTodoClick}>{name}</span>
    </li>
  );
};

// Rendu dans le DOM
ReactDOM.render(<App />, document.getElementById("root"));
