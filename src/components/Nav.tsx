import { Link } from "react-router-dom";
import { useEffect } from "react";
import { handleScroll } from "../utils/helperFn";

export default function Nav() {
  const handleBgScroll = () => {
    const nav = document.querySelector(".navul");
    if (nav) {
      if (window.scrollY > 0) {
        nav.classList.add("transparent");
      } else {
        nav.classList.remove("transparent");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleBgScroll);
    return () => {
      window.removeEventListener("scroll", handleBgScroll);
    };
  }, []);

  return (
    <nav className="flex flex-row justify-center mt-5">
      <ul className="navul flex flex-wrap">
        <Link to="/" className="navli">
          <li onClick={() => handleScroll("home")}>Home</li>
        </Link>
        <Link to="/" className="navli">
          <li onClick={() => handleScroll("work")}>Work</li>
        </Link>
        <Link to="/" className="navli">
          <li onClick={() => handleScroll("about")}>About</li>
        </Link>
        <Link to="/" className="navli">
          <li onClick={() => handleScroll("experience")}>Experience</li>
        </Link>
        <Link to="/" className="navli navli_hide">
          <li onClick={() => handleScroll("faq")}>FAQ</li>
        </Link>
      </ul>
    </nav>
  );
}
