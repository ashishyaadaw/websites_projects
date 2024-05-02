import React, { useEffect, useRef } from "react";
import $ from "jquery";

function FadeSlideUpOnScroll() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = sectionRef.current.getBoundingClientRect();
      const triggerHeight = window.innerHeight / 1.3; // Trigger when element comes into this viewport range

      if (top < triggerHeight) {
        $(sectionRef.current).animate(
          {
            opacity: 1,
            top: "0px",
          },
          1000
        ); // Adjust time and animation properties as needed
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div style={{ height: "100vh" }}>Scroll down to see the animation</div>
      <div
        ref={sectionRef}
        style={{
          opacity: 0,
          position: "relative",
          top: "50px",
          transition: "all 1s ease",
        }}
      >
        <h1>This content fades and slides up on scroll</h1>
        <p>Keep scrolling to see more content...</p>
      </div>
      <div style={{ height: "100vh" }}>More content below</div>
    </div>
  );
}

export default FadeSlideUpOnScroll;
