import { FaArrowRightLong } from "react-icons/fa6";
import CustomCardIcon from "../components/CustomCardIcon";
import { customTitleWorks } from "../utils/JSON";
import CustomTitle from "../components/CustomTitle";
function About() {
  return (
    <section id="about" className="flex flex-col gap-20 pt-40">
      <CustomTitle items={customTitleWorks} />
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
      <div className="beyond mt-20">
        <table>
          <tbody className="flex flex-row flex-wrap gap-5 justify-between">
            <tr>
              <td>
                <div className="flex flex-col gap-2 tr_container">
                  <span className="t4 uppercase font-mono tracking-widest">
                    Beyond Portfolio
                  </span>
                  <h1 className="font-serif">Let's know more about me</h1>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex flex-col gap-2 tr_container">
                  <span className="t4 uppercase font-mono tracking-widest">
                    My Tech Stacks
                  </span>
                  <span className="t4 text-gray-400">
                    Designed key features for embedding in-platform data.
                  </span>
                  <div className="flex flex-row gap-4 justify-between pt-10">
                    <CustomCardIcon name="JS" />
                    <CustomCardIcon name="TS" />
                    <CustomCardIcon name="RN" />
                    <CustomCardIcon name="GL" />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex flex-col gap-2 tr_container">
                  <span className="t4 uppercase font-mono tracking-widest">
                    Latest Project
                  </span>
                  <span className="t4 text-gray-400">
                    Designed key features for embedding in-platform data.
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex flex-col gap-2 tr_container">
                  <span className="t4 uppercase font-mono tracking-widest">
                    My Tech Stacks
                  </span>
                  <span className="t4 text-gray-400">
                    Designed key features for embedding in-platform data.
                  </span>
                  <div className="flex flex-row gap-4 justify-between pt-10">
                    <CustomCardIcon name="JS" />
                    <CustomCardIcon name="TS" />
                    <CustomCardIcon name="RN" />
                    <CustomCardIcon name="GL" />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex flex-col gap-2 tr_container">
                  <span className="t4 uppercase font-mono tracking-widest">
                    My Tech Stacks
                  </span>
                  <span className="t4 text-gray-400">
                    Designed key features for embedding in-platform data.
                  </span>
                  <div className="flex flex-row gap-4 justify-between pt-10">
                    <CustomCardIcon name="JS" />
                    <CustomCardIcon name="TS" />
                    <CustomCardIcon name="RN" />
                    <CustomCardIcon name="GL" />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex flex-col gap-2 tr_container">
                  <span className="t4 uppercase font-mono tracking-widest">
                    My Tech Stacks
                  </span>
                  <span className="t4 text-gray-400">
                    Designed key features for embedding in-platform data.
                  </span>
                  <div className="flex flex-row gap-4 justify-between pt-10">
                    <CustomCardIcon name="JS" />
                    <CustomCardIcon name="TS" />
                    <CustomCardIcon name="RN" />
                    <CustomCardIcon name="GL" />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default About;
