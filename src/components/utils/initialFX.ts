import gsap from "gsap";
import { smoother } from "../Navbar";

function splitIntoChars(element: HTMLElement) {
  const text = element.innerText;
  element.innerHTML = text
    .split("")
    .map((char) => `<span style="display:inline-block">${char === " " ? "&nbsp;" : char}</span>`)
    .join("");
  return element.querySelectorAll("span");
}

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  const headings = document.querySelectorAll<HTMLElement>(".landing-info h3, .landing-intro h2, .landing-intro h1");
  headings.forEach((el) => {
    const chars = splitIntoChars(el);
    gsap.fromTo(
      chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.025,
        delay: 0.3,
      }
    );
  });

  const h2Info = document.querySelector<HTMLElement>(".landing-h2-info");
  const h2Info1 = document.querySelector<HTMLElement>(".landing-h2-info-1");
  const h21 = document.querySelector<HTMLElement>(".landing-h2-1");
  const h22 = document.querySelector<HTMLElement>(".landing-h2-2");

  if (h2Info) {
    const chars = splitIntoChars(h2Info);
    gsap.fromTo(chars, { opacity: 0, y: 80, filter: "blur(5px)" }, { opacity: 1, duration: 1.2, filter: "blur(0px)", ease: "power3.inOut", y: 0, stagger: 0.025, delay: 0.3 });
  }

  gsap.fromTo(".landing-info-h2", { opacity: 0, y: 30 }, { opacity: 1, duration: 1.2, ease: "power1.inOut", y: 0, delay: 0.8 });
  gsap.fromTo([".header", ".icons-section", ".nav-fade"], { opacity: 0 }, { opacity: 1, duration: 1.2, ease: "power1.inOut", delay: 0.1 });

  if (h2Info && h2Info1) LoopText(h2Info, h2Info1);
  if (h21 && h22) LoopText(h21, h22);
}

function LoopText(el1: HTMLElement, el2: HTMLElement) {
  const chars1 = splitIntoChars(el1);
  const chars2 = splitIntoChars(el2);
  const delay = 4;
  const delay2 = delay * 2 + 1;
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  tl.fromTo(chars2, { opacity: 0, y: 80 }, { opacity: 1, duration: 1.2, ease: "power3.inOut", y: 0, stagger: 0.1, delay: delay }, 0)
    .fromTo(chars1, { y: 80 }, { duration: 1.2, ease: "power3.inOut", y: 0, stagger: 0.1, delay: delay2 }, 1)
    .fromTo(chars1, { y: 0 }, { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay: delay }, 0)
    .to(chars2, { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay: delay2 }, 1);
}
