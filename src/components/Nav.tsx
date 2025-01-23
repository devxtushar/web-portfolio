import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Nav() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <Link to="/" className="navli navli_hide">
          <li onClick={() => handleScroll("experience")}>Experience</li>
        </Link>
        <Link to="/" className="navli navli_hide">
          <li onClick={() => handleScroll("faq")}>FAQ</li>
        </Link>
        <Link to="/contact" className="navli">
          <li>Let's Talk</li>
        </Link>
      </ul>
    </nav>
  );
}
