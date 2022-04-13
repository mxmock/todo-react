import "./app.scss";
import { useState } from "react";
import Todos from "../todos/Todos";
import TODOS from "../../constants/todos";
import trashIcon from "../../img/trash-outline.svg";
import FloatingBtn from "../floating-btn/FloatingBtn";
import AddTodoForm from "../add-todo-form/AddTodoForm";

const App = () => {
  const [todos, setTodos] = useState(TODOS);

  const updateList = (list) => {
    setTodos([...list]);
  };

  const deleteCompleted = () => {
    const arr = todos.filter((todo) => !todo.isCompleted);
    updateList(arr);
  };

  return (
    <div className="container">
      <AddTodoForm allTodos={todos} onAdd={updateList} />
      <Todos
        allTodos={todos}
        markAsCompleted={updateList}
        updateTodo={updateList}
      />
      <FloatingBtn src={trashIcon} color="#d40502" click={deleteCompleted} />
    </div>
  );
};

export default App;
