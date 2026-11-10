import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Software Developer</h4>
                <h5>CB Dev Studio</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Founded CB Dev Studio, architecting flagship Android app Alarm
              Breaker (Google ML Kit posture & rep-counting, MVVM, Room SQLite)
              for Google Play Store alongside 4+ full-stack client web platforms
              with CI/CD & Docker.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Post-Training LLM / AI Intern</h4>
                <h5>Ethara AI</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Engineered LLM evaluation harnesses, structured JSON prompt
              rubrics, and asynchronous FastAPI verification workflows across
              100+ production queries; built offline Food Intelligence OCR and
              Enterprise RAG pipelines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — Information Technology</h4>
                <h5>NIET, Greater Noida (7.97 CGPA)</h5>
              </div>
              <h3>2022–26</h3>
            </div>
            <p>
              Graduating Class of 2026. Solved 357+ LeetCode problems, earned
              Oracle Cloud (OCI) Foundations & AI Foundations certifications,
              secured 2 top-10 hackathon finishes, and shipped AgriShield &
              CodeCure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
