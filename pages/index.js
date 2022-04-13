import React from "react";
import Navbar from "../components/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "../components/Header";
import { useEffect } from "react";
import useLocoScroll from "../hooks/useLocoScroll";
import Blog from "../components/Blog";
import Portfolio from "../components/Portfolio";

gsap.registerPlugin(ScrollTrigger);

function index() {
  useLocoScroll();

  useEffect(() => {
    setTimeout(() => {
      const scrollContainer = document.querySelector(".scroll-container");

      // NAVIGATIO ANIMATION
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
        yPercent: 20,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.8,
        scrollTrigger: {
          trigger: ".navbar",
          start: "10% 10%",
          scrub: 0.8,
          scroller: scrollContainer,
        },
      });

      gsap.from(".navbar__mobile", {
        opacity: 0,
        xPercent: 40,
        duration: 1,
        scrollTrigger: {
          trigger: ".header",
          start: "5% top",
          end: "15%",
          scrub: 1,
          scroller: scrollContainer,
        },
      });

      // HEADER ANIMATIONS
      const animHeaderTild = () => {
        const header = addEventListener("mousemove", moveImage);
      };

      function moveImage(e) {
        // GET THE PROPRITES FROM THE EVENT
        const { offsetX, offsetY, target } = e;

        // FIND THE CURRENT SIZE OF THE HEADER
        const { clientWidth, clientHeight } = target;

        // GET THE CENTER POSTION OF THE SCREEN
        const xPos = offsetX / clientWidth;
        const yPos = offsetY / clientHeight;

        //GET ALL IMAGES FOR LEFT & RIGHT
        const leftImages = gsap.utils.toArray(
          ".header__gallery--left .header__gallery-image"
        );

        const rightImages = gsap.utils.toArray(
          ".header__gallery--right .header__gallery-image"
        );

        // MODIFER VALUE FOR EACH IMAGE MOVMENT
        const modifier = (index) => index * 2 + 0.6;

        leftImages.forEach((image, index) => {
          gsap.to(image, {
            duration: 1.2,
            x: xPos * 20 * modifier(index),
            y: yPos * 30 * modifier(index),
            rotationX: yPos * 10,
            rotationY: xPos * 10,
          });
        });

        rightImages.forEach((image, index) => {
          gsap.to(image, {
            duration: 1.2,
            x: xPos * 20 * modifier(index),
            y: -yPos * 30 * modifier(index),
            rotationX: yPos * 10,
            rotationY: xPos * 10,
          });
        });

        gsap.to(".header__decor-circle", {
          duration: 1.7,
          x: 100 * xPos,
          y: 120 * yPos,
          ease: "power4.out",
        });
      }

      animHeaderTild();

      // PARALLAX GSAP animations

      gsap.utils.toArray(".with-parallax").forEach((section) => {
        const image = section.querySelector("img");
        const blogImage = section.querySelector(".blog__image");
        const imageMask = section.querySelector(".blog__image-mask");

        gsap.to(image, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top center",
            scrub: true,
            scroller: scrollContainer,
          },
        });

        gsap.from(imageMask, {
          height: "100%",
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top center",
            scroller: scrollContainer,
          },
        });

        gsap.from(blogImage, {
          duration: 3,
          scale: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".blog",
            start: "top center",
            scroller: scrollContainer,
          },
        });
      });

      ScrollTrigger.refresh();
    }, 100);

    return () => {};
  }, []);

  return (
    <div>
      {/* PRELOADER */}

      <Navbar />
      <div data-scroll-container className="scroll-container">
        {/* <Blog /> */}
        <Header />
        {/* BLOG */}
        <Blog />
        {/* PORTFOLIO */}
        <Portfolio />

        {/* CONTACT */}
      </div>
    </div>
  );
}

export default index;
