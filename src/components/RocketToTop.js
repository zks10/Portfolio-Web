import { useEffect, useState } from "react";
import rocketIcon from "../assets/img/rocket.png";

export const RocketToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const rocket = document.getElementById("rocket-icon");
    rocket.classList.add("rocket-animate");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      rocket.classList.remove("rocket-animate");
    }, 1000); // Match animation duration
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`rocket-container ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <img id="rocket-icon" src={rocketIcon} alt="Rocket to Top" />
    </div>
  );
};
