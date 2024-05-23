import { useCallback, useEffect, useState } from "react";

import scroll_top from "../../assets/scroll-top.svg";

import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = useCallback(() => {
    const offsetFromTop = window.scrollY;

    if (!showScroll && offsetFromTop > 400) {
      setShowScroll(true);
    } else if (offsetFromTop <= 400) {
      setShowScroll(false);
    }
  }, [showScroll]);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [checkScrollTop]);

  const scrollUp = () => {
    const element = document.getElementById("about");
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  if (!showScroll) return null;
  return (
    <div className="scrollup-container" onClick={scrollUp}>
      <img src={scroll_top} alt={scroll_top} width={20} height={15} />
    </div>
  );
};

export default ScrollToTop;
