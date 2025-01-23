import Home from "./pages/Home";
import Nav from "./components/Nav";
import "./css/Home.css";
import Works from "./pages/Works";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Faq from "./pages/Faq";

function App() {
  return (
    <div className="flex flex-col gap-20">
      <Nav />
      <main>
        <Home />
        <Works />
        <About />
        <Experience />
        <Faq />
      </main>
    </div>
  );
}

export default App;
