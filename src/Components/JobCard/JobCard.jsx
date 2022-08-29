import "./JobCard.css";

export const JobCard = () => {
  return (
    <div className="card-container featured-border">
      <div className="info-container">
        <img src="./Assets/images/photosnap.svg" />
        <div>
          <div className="info-header">
            <p>Photosnap</p>
            <p className="new">NEW!</p>
            <p className="featured">FEATURED</p>
          </div>
          <p className="position">Senior Frontend Developer</p>
          <p className="more-info">1d ago • Full Time • USA only</p>
        </div>
      </div>
      <hr />
      <div className="keywords">
        <p>Frontend</p>
        <p>Senior</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>Javascript</p>
      </div>
    </div>
  );
};
