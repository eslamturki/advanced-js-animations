import React from "react";
import Navbar from "../components/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "../components/Header";
import { useEffect } from "react";
import useLocoScroll from "../hooks/useLocoScroll";
gsap.registerPlugin(ScrollTrigger);
function index() {
  useLocoScroll();
  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");

    const animNavLinks = () => {
      const navLinks = gsap.utils.toArray(".navbar a");
      navLinks.forEach((link) => {
        link.addEventListener("mouseleave", (e) => {
          link.classList.add("animate-out");
          setTimeout(() => {
            link.classList.remove("animate-out");
          }, 500);
        });
      });
    };
    animNavLinks();

    gsap.to(".navbar__link", {
      yPercenter: 20,
      autoAlpha: 0,
      duration: 1,
      // stagger: 0.8,
      ScrollTrigger: {
        trigger: ".navbar",
        start: "10% 10%",
        scrub: 0.8,
        scroller: scrollContainer,
      },
    });

    return () => {};
  }, []);

  return (
    <div>
      {/* PRELOADER */}

      <Navbar />
      <div data-scroll-container className="scroll-container">
        <Header />
        <Header />

        {/* BLOG */}
        {/* PORTFOLIO */}
        {/* CONTACT */}
      </div>
    </div>
  );
}

export default index;
