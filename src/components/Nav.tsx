import { Link } from "react-router-dom";

export default function Nav() {
  const handleScroll = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
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
