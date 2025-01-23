import { customTitleFAQJson } from "../utils/JSON";
import CustomTitle from "../components/CustomTitle";
import { FaChevronUp } from "react-icons/fa";
import { PiHandWavingBold } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";

function Faq() {
  return (
    <section className="flex flex-col gap-20 py-20">
      <CustomTitle items={customTitleFAQJson} />
      <div className="flex flex-row flex-wrap gap-10">
        <div className="flex-1 faq_card p-20 ">
          <div className="mb-10 text-center">
            <h1 className="font-serif">
              Have any more questions or want to start collaborating?
            </h1>
          </div>
          <div className="relative">
            <img
              src="../images/tusharpic01.webp"
              alt="devxtushar image"
              className="profile"
            />
            <div className="flex flex-col gap-2 items-center btn_posi">
              <div>
                <button>
                  <PiHandWavingBold size={18} /> Let's talk
                </button>
              </div>
              <span className="t5 font-bold">
                *Response time is typically around 24 hours
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-10">
          <div className="faq_card p-10">
            <div className="flex flex-row justify-between">
              <h3>Are you available to hire full time?</h3>
              <FaChevronUp size={20} />
            </div>
            <h4 className="text-gray-500 font-sans mt-5">
              At the moment, I'm pretty happy where I am, Currently I am not At
              the moment, I'm pretty happy where I am, Currently I am notAt the
              moment, I'm pretty happy where I am, Currently I am not At the
              moment, I'm pretty happy where I am, Currently I am not At the
              moment, I'm pretty happy where I am, Currently I am not At the
              moment, I'm pretty happy where I am, Currently I am not Happy to
              connect on socials.
            </h4>
          </div>
          <div className="faq_card p-10">
            <div className="flex flex-row justify-between">
              <h3>
                How do your quote pricing works and when can we get on call?
              </h3>
              <FaChevronDown size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
