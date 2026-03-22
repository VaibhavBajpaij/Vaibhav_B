import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

export let smoother: any = {
  scrollTop: () => {},
  paused: () => {},
  scrollTo: (section: any) => {
    document.querySelector(section)?.scrollIntoView({ behavior: "smooth" });
  },
};

const Navbar = () => {
  useEffect(() => {
    let links = document.querySelectorAll(".header ul a");

    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;

      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();

          let el = e.currentTarget as HTMLAnchorElement;
          let section = el.getAttribute("data-href");

          document
            .querySelector(section!)
            ?.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          VB
        </a>

        {/* ✅ FIXED anchor tag */}
        <a
          href="mailto:bajpaivaibhav8081@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          bajpaivaibhav8081@gmail.com
        </a>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;