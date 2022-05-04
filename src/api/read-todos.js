import request from "./request";
import { readTodos, setLoading } from "../redux/actions/todos";

const getMappedTodos = (data) =>
  data.map((todo) => ({
    id: todo.id,
    name: todo.title,
    isCompleted: todo.completed,
  }));

const read = async () => {
  const config = {
    method: `get`,
    url: `/user/1/todos`,
  };

  return await request(config);
};

const readTodosThunk = async (dispatch, state) => {
  dispatch(setLoading(true));
  const { data, status } = await read();
  dispatch(setLoading(false));
  if (!data)
    // handle errors here
    return console.error(`Can't get todos, request status: ${status}`);
  const todos = getMappedTodos(data);
  dispatch(readTodos(todos));
};

export default readTodosThunk;
