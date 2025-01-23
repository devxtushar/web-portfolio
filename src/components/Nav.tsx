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
          Home
        </li>
        <li className="navli" onClick={() => handleScroll("work")}>
          Work
        </li>
        <li className="navli navli_hide" onClick={() => handleScroll("about")}>
          About
        </li>
        <li className="navli " onClick={() => handleScroll("experience")}>
          Experience
        </li>
        <li className="navli navli_hide" onClick={() => handleScroll("faq")}>
          FAQ
        </li>
        <li className="navli">Let's Talk</li>
      </ul>
    </nav>
  );
}
