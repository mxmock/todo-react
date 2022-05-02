import mc from "./app.module.scss";
import TODOS from "../../constants/todos";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FILTER } from "../../constants/utils";
import TodosList from "../todos-list/TodosList";
import trashIcon from "../../img/trash-outline.svg";
import FloatingBtn from "../floating-btn/FloatingBtn";
import TodosFilter from "../todos-filter/TodosFilter";
import TodoAddForm from "../todo-add-form/TodoAddForm";

const App = () => {
  /*************************** STATES ***************************/

  const todos = useSelector((state) => state.todos);
  const [filter, setFilter] = useState(FILTER.ALL);
  const [filteredTodos, setFilteredTodos] = useState(TODOS);

  /*************************** EFFECTS ***************************/

  useEffect(() => {
    setFilteredTodos(() => {
      return filter === FILTER.COMPLETED
        ? todos.filter((t) => t.isCompleted)
        : filter === FILTER.UNCOMPLETED
        ? todos.filter((t) => !t.isCompleted)
        : [...todos];
    });
  }, [filter, todos]);

  /*************************** HTML ***************************/

  return (
    <div className={mc.container}>
      <TodoAddForm />
      <div className={mc.list}>
        <TodosFilter filter={filter} click={(f) => setFilter(f)} />
        <TodosList todos={filteredTodos} />
      </div>
      <FloatingBtn src={trashIcon} color="#d40502" />
    </div>
  );
};

export default App;
