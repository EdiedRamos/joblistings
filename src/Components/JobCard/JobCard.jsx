import "./JobCard.css";

export const JobCard = (props) => {
  return (
    <div className={`card-container ${props.featured && "featured-border"}`}>
      <div className="info-container">
        <img src={props.logo} alt={`Logo from ${props.company}`} />
        <div>
          <div className="info-header">
            <p>{props.company}</p>
            {props.new && <p className="new">NEW!</p>}
            {props.featured && <p className="featured">FEATURED</p>}
          </div>
          <p className="position">{props.position}</p>
          <p className="more-info">{`${props.postedAt} • ${props.contract} • ${props.location}`}</p>
        </div>
      </div>
      <hr />
      <div className="keywords">
        {[...props.languages, ...props.tools].map((item) => (
          <p
            key={item}
            onClick={() =>
              props.setList((prev) =>
                prev.includes(item) ? prev : [...prev, item]
              )
            }
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
