import { customTitleFAQJson, faqJson } from "../utils/JSON";
import CustomTitle from "../components/CustomTitle";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import Info from "../components/Info";

function Faq() {
  const [selectedFaq, setSelectedFaq] = useState(0);
  return (
    <section id="faq" className="flex flex-col gap-20 py-40">
      <CustomTitle items={customTitleFAQJson} />
      <div className="flex flex-row flex-wrap gap-10">
        <Info />
        <div className="flex-1 flex flex-col gap-10 faq_card p-10">
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
