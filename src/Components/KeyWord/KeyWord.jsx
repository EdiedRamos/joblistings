import "./KeyWord.css";

export const KeyWord = (props) => {
  return (
    <div className="keyword-container">
      <p className="keyword-text">{props.keyword}</p>
      <button
        className="close"
        onClick={() =>
          props.setList((prev) =>
            prev.filter((keyword) => keyword !== props.keyword)
          )
        }
      >
        <ion-icon name="close" />
      </button>
    </div>
  );
};
