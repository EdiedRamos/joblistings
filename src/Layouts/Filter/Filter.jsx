import "./Filter.css";
import { KeyWord } from "../../Components";

export const Filter = () => {
  return (
    <div className="filter-container">
      <div className="filter-options">
        <div className="filter-keywords">
          <KeyWord />
        </div>
        <p id="clear">Clear</p>
      </div>
    </div>
  );
};
