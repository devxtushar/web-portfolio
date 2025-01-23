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
        <li className="navli" onClick={() => handleScroll("home")}>
          <Link to="/"> Home </Link>
        </li>
        <li className="navli" onClick={() => handleScroll("work")}>
          <Link to="/"> Work</Link>
        </li>
        <li className="navli navli_hide" onClick={() => handleScroll("about")}>
          <Link to="/">About</Link>
        </li>
        <li className="navli " onClick={() => handleScroll("experience")}>
          <Link to="/"> Experience </Link>
        </li>
        <li className="navli navli_hide" onClick={() => handleScroll("faq")}>
          <Link to="/"> FAQ </Link>
        </li>

        <li className="navli">
          <Link to="/contact">Let's Talk </Link>
        </li>
      </ul>
    </nav>
  );
}
