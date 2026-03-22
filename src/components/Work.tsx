import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  title: string;
  category: string;
  tools: string;
  image: string;
  github: string;
  live: string | null;
};

const projects: Project[] = [
  {
    title: "CodeCure",
    category: "Healthcare Platform",
    tools: "Flask, ML Models, SQLite, Python",
    image: "/images/codecure.png",
    github: "https://github.com/VaibhavBajpaij/CodeCure-Healthcare-Website-GFGXNIET",
    live: null,
  },
  {
    title: "N-Queens Visualizer",
    category: "Algorithm Visualizer",
    tools: "JavaScript, HTML5, CSS3",
    image: "/images/nqueen.png",
    github: "https://github.com/VaibhavBajpaij/N-Queens-PuzzleBYVB",
    live: "https://n-queens-puzzle-byvb.vercel.app/",
  },
  {
    title: "SignLearn",
    category: "AI / ML App",
    tools: "React.js, Flask, TensorFlow, OpenCV",
    image: "/images/mute.png",
    github: "https://github.com/VaibhavBajpaij/learning-app-for-mute-and-deaf",
    live: null,
  },
  {
    title: "AgriShield",
    category: "AgriTech Platform",
    tools: "React.js, Node.js, Express.js, MongoDB, ML",
    image: "/images/agoshild.png",
    github: "https://github.com/VaibhavBajpaij/Agrishield",
    live: "https://agrishield.vercel.app/",
  },
  {
    title: "Smrit Note Builder",
    category: "React",
    tools: "React.js, JS, CSS",
    image: "/images/smriti.png",
    github: "https://github.com/VaibhavBajpaij/Smrit",
    live: "https://smrit.vercel.app/",
  },
];

function renderLinks(project: Project) {
  const links = [];

  links.push(
    <a
      key="github"
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="carousel-btn github-btn"
      data-cursor="disable"
    >
      <FaGithub /> GitHub
    </a>
  );

  if (project.live) {
    links.push(
      <a
        key="live"
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="carousel-btn live-btn"
        data-cursor="disable"
      >
        <FaExternalLinkAlt /> Live
      </a>
    );
  }

  return <div className="carousel-links">{links}</div>;
}
const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {renderLinks(project)}
                      </div>
                    </div>
                    <div
                      className="carousel-image-wrapper"
                      onClick={() =>
                        window.open(
                          project.live ? project.live : project.github,
                          "_blank"
                        )
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;