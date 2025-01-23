import CustomTitle from "../components/CustomTitle";
import { customTitleExperienceJson } from "../utils/JSON";
import { GoDotFill } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";
function Experience() {
  return (
    <section id="experience" className="flex flex-col gap-20 pt-40">
      <div className="experience">
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
      <div className="connect_container flex flex-row flex-wrap gap-5">
        <div className="flex-2">
          <h1 className="font-serif capitalize">
            Let's connect & create something amazing!
          </h1>
          <h5 className="text-gray-400 font-sans">
            React out to me for collaborations, inquires, or just to say hello.
          </h5>
        </div>
        <div className="flex-1  flex justify-end items-center">
          <button>
            Contact Me
            <FiArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Experience;
