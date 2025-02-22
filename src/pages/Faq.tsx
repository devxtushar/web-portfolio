import { customTitleFAQJson, faqJson } from "../utils/JSON";
import CustomTitle from "../components/CustomTitle";
import { FaChevronUp } from "react-icons/fa";
import { PiHandWavingBold } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

function Faq() {
  const [selectedFaq, setSelectedFaq] = useState(0);
  return (
    <section id="faq" className="flex flex-col gap-20 py-40">
      <CustomTitle items={customTitleFAQJson} />
      <div className="flex flex-row flex-wrap gap-10">
        <div className="flex-1 faq_card p-10">
          <div className="mb-10 text-center">
            <h1 className="font-serif">
              Have any more questions or want to discuss on project?
            </h1>
          </div>
          <div className="relative flex justify-center">
            <img
              src="../images/tusharpic01.webp"
              alt="devxtushar image"
              className="profile"
            />
            <div className="flex flex-col gap-2 items-center btn_posi">
              <div>
                <Link to="/contact">
                  <button>
                    <PiHandWavingBold size={18} /> Let's talk
                  </button>
                </Link>
              </div>
              <span className="t6 font-bold text-black font-sans">
                *Response time is typically around 24 h
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-10">
          {faqJson.map((items, i) => {
            const { question, answer } = items;
            return (
              <div key={i} className="faq_card p-10">
                <div
                  className="flex flex-row justify-between cursor-pointer"
                  onClick={() => setSelectedFaq(i)}
                >
                  <h3>{question}</h3>
                  {selectedFaq === i ? (
                    <FaChevronUp size={20} className="cursor-pointer" />
                  ) : (
                    <FaChevronDown size={20} className="cursor-pointer" />
                  )}
                </div>
                {selectedFaq === i && (
                  <h4 className="text-gray-500 font-sans mt-5">{answer}</h4>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
