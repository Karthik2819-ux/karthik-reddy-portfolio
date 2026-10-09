import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          learning <span>&</span>
          <br /> Skill Journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack ui ux Designer</h4>
                <h5>Certified and self-taught uiux designer</h5>
              </div>
              <h3>2025 - Present </h3>
            </div>
            <p>
              Developing skills in user interface and user experience design.
  Learning wireframing, prototyping, user flows, and visual design
  principles to create intuitive and user-friendly interfaces.
  Tools: Figma, FigJam, Canva, Adobe Illustrator.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
