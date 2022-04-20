import mc from "./todos-filter.module.scss";
import { FILTER } from "../../constants/utils";

const TodosFilter = ({ filter, click }) => {
  return (
    <div className={mc.container}>
      <button
        className={filter === FILTER.ALL ? mc.active : ""}
        onClick={() => click(FILTER.ALL)}
      >
        Tous
      </button>
      <button
        className={filter === FILTER.COMPLETED ? mc.active : ""}
        onClick={() => click(FILTER.COMPLETED)}
      >
        Complétés
      </button>
      <button
        className={filter === FILTER.UNCOMPLETED ? mc.active : ""}
        onClick={() => click(FILTER.UNCOMPLETED)}
      >
        Non complétés
      </button>
    </div>
  );
};

export default TodosFilter;
