import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

function useLocoScroll() {
  useEffect(() => {
    let locoScroll = null;
    (async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const scrollContainer = document.querySelector(".scroll-container");
        const locoScroll = new LocomotiveScroll({
          el: scrollContainer, //DEFINE THE SCROLL CONTAINER
          smooth: true,
          multiplier: 1, //CHANGE THE SPEED OF THE USERS SCROLL
          getSpeed: true,
          getDirection: true,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        });

        locoScroll.on("scroll", ScrollTrigger.update);
        ScrollTrigger.scrollerProxy(scrollContainer, {
          scrollTop(value) {
            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              high: window.innerHeight,
            };
          },
        });

        const lsUpdate = () => {
          if (locoScroll) {
            locoScroll.update();
          }
        };
        ScrollTrigger.addEventListener("refresh", lsUpdate);

        ScrollTrigger.refresh();
      } catch (error) {
        throw Error(`[useLocoScroll]: ${error}`);
      }
    })();

    return () => {
      // FOR GOOD PRACTICE WE NEED TO REMOVE OUR EVENT LISTENERS AND LOCOSCROLL WHEN THE COMPONENT UNMOUNTS
      locoScroll.destroy();
      ScrollTrigger.removeEventListener("refresh", lsUpdate);
    };
  }, []);
}

export default useLocoScroll;
