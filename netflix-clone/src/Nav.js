import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  const listener=() => {
    if (window.scrollY > 100) {
      setShow(true);
    } else setShow(false);
  }
  
  useEffect(() => {
    window.addEventListener("scroll",listener);
    return () => {
      window.removeEventListener("scroll",listener);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix-logo"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix-Logo"
      />
    </div>
  );
}

export default Nav;
