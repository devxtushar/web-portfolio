import { FaArrowRightLong } from "react-icons/fa6";

function About() {
  return (
    <section id="about" className="flex flex-col gap-20 pt-40">
      <div className="flex flex-row flex-wrap gap-20">
        <div
          className="flex-1 flex flex-col gap-2"
          style={{ minWidth: "250px" }}
        >
          <span className="t4 uppercase font-mono tracking-widest">
            About Me
          </span>

          <h1 className="font-serif">Know who am I</h1>

          <span className="t4">My journey in few words</span>
          <h4 className="text-gray-500 font-sans">
            Hello! I’m a results-driven Software Engineer with over 2 years of
            experience designing and developing high-performance applications.
            My expertise spans modern web and mobile technologies, with a focus
            on delivering user-centric solutions that are both scalable and
            robust.I have hands-on experience in developing web and mobile
            applications for platforms like Licious (E-commerce) and
            PhysicsWallah (EdTech), with a strong focus on optimizing user
            experience. Passionate about creating innovative solutions, I excel
            in collaborative environments and am always eager to learn, grow,
            and drive technological advancements.
          </h4>

          <div className="mt-4">
            <a
              href="https://www.linkedin.com/in/devxtushar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                Know more <FaArrowRightLong size={16} className="ml-1 mt-1" />
              </button>
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-row justify-end center_section">
          <div className="about_img">
            <img src="../images/tusharpic01.webp" alt="tushar image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
