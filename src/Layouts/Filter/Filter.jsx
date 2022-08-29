import "./Filter.css";
import { KeyWord } from "../../Components";

export const Filter = (props) => {
  return (
    props.list.length > 0 && (
      <div className="filter-container">
        <div className="filter-options">
          <div className="filter-keywords">
            {props.list.map((keyword) => (
              <KeyWord
                key={keyword}
                keyword={keyword}
                setList={props.setList}
              />
            ))}
          </div>
          <p id="clear" onClick={() => props.setList(() => [])}>
            Clear
          </p>
        </div>
      </div>
    )
  );
};
