import "./app.scss";
import { useState } from "react";
import Todos from "../todos/Todos";
import TODOS from "../../constants/todos";

const App = () => {
  const [todos, setTodos] = useState(TODOS);

  const updateList = (list) => {
    setTodos([...list]);
  };

  return <Todos allTodos={todos} markAsCompleted={updateList} />;
};

export default App;
