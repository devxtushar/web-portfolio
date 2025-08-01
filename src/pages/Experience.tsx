import CustomTitle from "../components/CustomTitle";
import { customTitleExperienceJson, myExperienceJson } from "../utils/JSON";
import { GoDotFill } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import { handleScroll } from "../utils/helperFn";

function Experience() {
  return (
    <section id="experience" className="flex flex-col gap-20 pt-40">
      <div className="experience">
        <CustomTitle items={customTitleExperienceJson} />
        <div>
          {myExperienceJson.map((items, i: number) => {
            const { designation, company, join, leave, city, country, work } =
              items;
            return (
              <div key={i}>
                <div className="flex flex-row flex-wrap gap-5 pt-10">
                  <div className="flex-1 flex flex-col gap-2">
                    <div>
                      <span className="t3 font-sans font-semibold">
                        {designation}, {company}
                      </span>
                    </div>
                    <div>
                      <i className="t4 text-gray-500">
                        {leave} - {join} / {city}, {country}
                      </i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <ul>
                      {work.map((items, i) => {
                        const { points } = items;
                        return (
                          <li key={i} className="flex flex-row gap-2">
                            <GoDotFill
                              color="green"
                              size={14}
                              className="mt-2"
                            />
                            <span className="t4 text-gray-400">{points}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                {i != 3 && <hr className="mt-10" />}
              </div>
            );
          })}
        </div>
      </div>
      <div className="connect_container flex flex-row flex-wrap gap-5">
        <div className="flex-2">
          <h1 className="font-serif capitalize">
            Let's connect & create some amazing products!
          </h1>
          <h4 className="text-gray-400 font-sans">
            React out to me for collaborations, inquires or one to one session.
          </h4>
        </div>
        <div className="flex-1  flex justify-end items-center">
          <button onClick={() => handleScroll("faq")}>
            Contact Me
            <FaChevronDown size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Experience;
