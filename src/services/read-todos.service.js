import { readTodos, setLoading } from "../redux/actions/todos";

const readTodosRequest = async () => {
  const config = {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  };

  const url = "https://jsonplaceholder.typicode.com/todos?userId=1";

  const result = await fetch(url, config)
    .then((res) => res.json())
    .then(
      (result) => {
        return result;
      },
      (error) => {
        return null;
      }
    );

  return result;
};

const readTodosThunk = async (dispatch, state) => {
  dispatch(setLoading(true));
  const response = await readTodosRequest();
  dispatch(setLoading(false));
  if (!response) return;
  const todos = response.map((todo) => ({
    id: todo.id,
    name: todo.title,
    isCompleted: todo.completed,
  }));
  dispatch(readTodos(todos));
};

export default readTodosThunk;
