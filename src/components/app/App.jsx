import mc from "./app.module.scss";
import TODOS from "../../constants/todos";
import { useEffect, useState } from "react";
import LogsList from "../logs-list/LogsList";
import { FILTER } from "../../constants/utils";
import TodosList from "../todos-list/TodosList";
import trashIcon from "../../img/trash-outline.svg";
import FloatingBtn from "../floating-btn/FloatingBtn";
import TodosFilter from "../todos-filter/TodosFilter";
import TodoAddForm from "../todo-add-form/TodoAddForm";
import { useDispatch, useSelector } from "react-redux";
import readTodosThunk from "../services/read-todos.service";

const App = () => {
  /*************************** STATES ***************************/

  const dispatch = useDispatch();
  const { todos, logs, isLoading } = useSelector((state) => ({
    todos: state.todoReducer.todos,
    isLoading: state.todoReducer.isLoading,
    logs: state.logReducer.logs,
  }));
  const [filter, setFilter] = useState(FILTER.ALL);
  const [filteredTodos, setFilteredTodos] = useState(TODOS);

  /*************************** EFFECTS ***************************/

  /* On veut envoyer une fonction en argument de dispatch, afin que le 
  middleware thunk execute cette fonction (async / side effect).
  Cette fonction peut prendre en argmument dispatch et getState 
  (voir signature de la fonction thunkMiddleware) */
  useEffect(() => {
    dispatch(readTodosThunk);
  }, []);

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
      <div className={mc["left-side"]}>
        <TodoAddForm />
        {logs.length > 0 && <LogsList logs={logs} />}
      </div>
      <div className={mc.list}>
        <TodosFilter filter={filter} click={(f) => setFilter(f)} />
        {isLoading ? (
          <p className={mc.loading}>Chargement des données</p>
        ) : (
          <TodosList todos={filteredTodos} />
        )}
      </div>
      <FloatingBtn src={trashIcon} color="#d40502" />
    </div>
  );
};

export default App;
