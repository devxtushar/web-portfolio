import CustomTitle from "../components/CustomTitle";
import { customTitleExperienceJson } from "../utils/JSON";
import { GoDotFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

function About() {
  return (
    <section>
      <div className="flex flex-row flex-wrap gap-20">
        <div
          className="flex-1 flex flex-col gap-2"
          style={{ minWidth: "250px" }}
        >
          <span className="t4 uppercase font-mono tracking-widest">
            AIRBNB . 2023
          </span>
          <h1 className="font-serif">
            Curating AR experiences while travelling
          </h1>
          <h4 className="text-gray-500 font-sans">
            Hello! I’m a results-driven Software Engineer with over 3 years of
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
            <button>
              Know more <FaArrowRightLong size={16} className="ml-1 mt-1" />
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-row justify-end">
          <div className="about_img">
            <img src="../images/tusharpic01.webp" alt="tushar image" />
          </div>
        </div>
      </div>
      <div className="beyond">
        <table>
          <tbody>
            <tr>
              <td>Beyond Portfolio</td>
            </tr>
            <tr>
              <td>Tech Stacks</td>
            </tr>
            <tr>
              <td>Location</td>
            </tr>
            <tr>
              <td>Current Project</td>
            </tr>
            <tr>
              <td>Social Accounts</td>
            </tr>
            <tr>
              <td>My Persona</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="experience py-10">
        <CustomTitle items={customTitleExperienceJson} />
        <div>
          <div>
            <div className="flex flex-row gap-20 pt-10">
              <div className="flex flex-col gap-2">
                <div>
                  <span className="t3 font-sans font-semibold">
                    Software Developer, Suverafresh
                  </span>
                </div>
                <div>
                  <i className="t5 text-gray-500">
                    Present - Oct 2024 / Kanpur, India
                  </i>
                </div>
              </div>
              <ul>
                <li className="flex flex-row gap-2 items-center">
                  <GoDotFill color="green" size={14} />
                  <span className="t4 text-gray-400">
                    Designed key features for embedding in-platform data.
                  </span>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <GoDotFill color="green" size={14} />
                  <span className="t4 text-gray-400">
                    Designed key features for embedding in-platform data.
                  </span>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <GoDotFill color="green" size={14} />
                  <span className="t4 text-gray-400">
                    Designed key features for embedding in-platform data.
                  </span>
                </li>
              </ul>
            </div>
            <hr className="mt-10" />
          </div>
          <div>
            <div className="flex flex-row gap-20 pt-10">
              <div className="flex flex-col gap-2">
                <div>
                  <span className="t3 font-sans font-semibold">
                    Software Developer, Suverafresh
                  </span>
                </div>
                <div>
                  <i className="t5 text-gray-500">
                    Present - Oct 2024 / Kanpur, India
                  </i>
                </div>
              </div>
              <ul>
                <li className="flex flex-row gap-2 items-center">
                  <GoDotFill color="green" size={14} />
                  <span className="t4 text-gray-400">
                    Designed key features for embedding in-platform data.
                  </span>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <GoDotFill color="green" size={14} />
                  <span className="t4 text-gray-400">
                    Designed key features for embedding in-platform data.
                  </span>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <GoDotFill color="green" size={14} />
                  <span className="t4 text-gray-400">
                    Designed key features for embedding in-platform data.
                  </span>
                </li>
              </ul>
            </div>
            <hr className="mt-10" />
          </div>
          <div>
            <div className="flex flex-row gap-20 pt-10">
              <div className="flex flex-col gap-2">
                <div>
                  <span className="t3 font-sans font-semibold">
                    Software Developer, Suverafresh
                  </span>
                </div>
                <div>
                  <i className="t5 text-gray-500">
                    Present - Oct 2024 / Kanpur, India
                  </i>
                </div>
              </div>
              <ul>
                <li className="flex flex-row gap-2 items-center">
                  <GoDotFill color="green" size={14} />
                  <span className="t4 text-gray-400">
                    Designed key features for embedding in-platform data.
                  </span>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <GoDotFill color="green" size={14} />
                  <span className="t4 text-gray-400">
                    Designed key features for embedding in-platform data.
                  </span>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <GoDotFill color="green" size={14} />
                  <span className="t4 text-gray-400">
                    Designed key features for embedding in-platform data.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
