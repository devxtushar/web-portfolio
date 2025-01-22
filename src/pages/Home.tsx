import { PiHandWavingBold } from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import Works from "./Works";
import Faq from "./Faq";

function Home() {
  return (
    <main className="flex flex-col gap-20">
      <section className="flex flex-col gap-10 items-center py-20">
        <div className="flex flex-col items-center">
          <img
            src="../images/avatar02-bg-white.png"
            alt="avatar"
            className="avatar"
          />
          <button style={{ background: "#010101", color: "white" }}>
            <GoDotFill color="green" size={20} className="pt-1" />
            Available for opportunities
          </button>
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="flex font-serif flex-col items-center">
            <h1>Welcome to</h1>
            <h1>my digital humble abode</h1>
          </div>
          <div className="flex font-sans flex-col items-center text-gray-500">
            <h4>I'm a Software Engineer.</h4>
            <h4>My interest lies in software development, problem solving.</h4>
          </div>
        </div>
        <div className="flex gap-5">
          <button>
            <PiHandWavingBold size={18} />
            Let's talk
          </button>
          <button>
            Get Template <FiArrowUpRight size={15} />
          </button>
        </div>
      </section>
      <Works />
      <Faq />
    </main>
  );
}

export default Home;
