import mc from "./filter-buttons.module.scss";
import { FILTER } from "../../constants/utils";

const FilterButtons = ({ filter, handleClick }) => {
  return (
    <div className={mc.container}>
      <button
        className={filter === FILTER.ALL ? mc.active : ""}
        onClick={() => handleClick(FILTER.ALL)}
      >
        Tous
      </button>
      <button
        className={filter === FILTER.COMPLETED ? mc.active : ""}
        onClick={() => handleClick(FILTER.COMPLETED)}
      >
        Complétés
      </button>
      <button
        className={filter === FILTER.UNCOMPLETED ? mc.active : ""}
        onClick={() => handleClick(FILTER.UNCOMPLETED)}
      >
        Non complétés
      </button>
    </div>
  );
};

export default FilterButtons;
