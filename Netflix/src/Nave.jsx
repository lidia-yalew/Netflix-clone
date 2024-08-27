import React, { useEffect, useState } from "react";
import im from "./img/im.png";
import "./Nav.css";

function Nave() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`nav ${isScrolled ? "nav-chang" : ""}`}>
        <img src={im} className="nav-logo" />
        <img
          className="nav-img"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        />
      </div>
    </div>
  );
}

export default Nave;
