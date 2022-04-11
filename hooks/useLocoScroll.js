import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;
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
      } catch (error) {
        throw Error(`[useLocoScroll]: ${error}`);
      }
    })();

    return () => {
      // FOR GOOD PRACTICE WE NEED TO REMOVE OUR EVENT LISTENERS AND LOCOSCROLL WHEN THE COMPONENT UNMOUNTS
      locoScroll.destroy();
      ScrollTrigger.removeEventListener("refresh", lsUpdate);
    };
  }, [start]);
}

export default useLocoScroll;
