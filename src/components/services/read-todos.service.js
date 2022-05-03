import { TODOS_ACTIONS } from "../../constants/utils";

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
  const response = await readTodosRequest();
  if (!response) return;
  const todos = response.map((todo) => ({
    id: todo.id,
    name: todo.title,
    isCompleted: todo.completed,
  }));
  dispatch({ type: TODOS_ACTIONS.READ, todos });
};

export default readTodosThunk;
