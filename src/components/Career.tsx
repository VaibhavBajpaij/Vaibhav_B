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
                <h4>Freelance Web Developer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed 4+ responsive websites for local businesses and college
              organizations, serving 500+ monthly users. Built reusable React
              and vanilla JavaScript components, reducing development time by 20%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & ML Projects</h4>
                <h5>Personal / Academic</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built SignLearn, a real-time sign language recognition app using
              React, Flask, TensorFlow & OpenCV achieving 90% accuracy. Developed
              CodeCure, a predictive healthcare platform with 85% diagnostic
              accuracy serving 100+ users.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — Information Technology</h4>
                <h5>Noida Institute of Engineering and Technology</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing B.Tech (Expected 2026). Solved 350+ DSA
              problems on LeetCode & GeeksforGeeks. Secured top-10 finishes in
              2 hackathons and built AgriShield — an AI-powered platform bridging
              farmers and buyers with crop price prediction and blockchain-secured contracts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;