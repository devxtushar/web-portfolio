import { PiHandWavingBold } from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import Nav from "../components/Nav";
import Works from "./Works";
import About from "./About";
import Experience from "./Experience";
import Faq from "./Faq";
import { Link } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="layout">
      <Nav />
      <main>
        <section id="home" className="flex flex-col gap-10 items-center pt-40">
          <div className="flex flex-col items-center">
            <img
              src="../images/avatar02-bg-white.png"
              alt="avatar"
              className="avatar"
            />
            <button style={{ background: "#010101", color: "white" }}>
              <GoDotFill color="green" size={20} className="pt-1" />
              Available for opportunities
              <FaFileDownload className="pt-1 ml-2" />
            </button>
          </div>
          <div className="flex flex-col gap-5 ">
            <div className="flex font-serif flex-col items-center">
              <h1>Welcome to</h1>
              <h1>my digital humble abode</h1>
            </div>
            <div className="flex font-sans flex-col items-center text-gray-500">
              <h4>I'm a Software Engineer.</h4>
              <h4>
                My interest lies in software development & problem solving.
              </h4>
            </div>
          </div>
          <div className="flex gap-5">
            <Link to="/contact">
              <button>
                <PiHandWavingBold size={18} />
                Let's Talk
              </button>
            </Link>
            <button>
              Download Resume <FiArrowUpRight size={15} />
            </button>
          </div>
        </section>
        <Works />
        <About />
        <Experience />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
