import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
function WorkCard() {
  return (
    <div className="flex flex-wrap gap-20 card">
      <div className="flex-2 flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <span className="t4 uppercase font-mono tracking-widest">
            AIRBNB . 2023
          </span>
          <h1 className="font-serif">
            Curating AR experiences while travelling
          </h1>
        </div>
        <hr />
        <ul className="flex flex-col gap-2">
          <li className="t3 font-sans flex flex-row gap-4 items-center">
            <AiOutlineCheckCircle /> Onboarding increased to 12%.
          </li>
          <li className="t3 font-sans flex flex-row gap-4 items-center">
            <AiOutlineCheckCircle /> New users signups increased by 32%.
          </li>
          <li className="t3 font-sans flex flex-row gap-4 items-center">
            <AiOutlineCheckCircle /> Engagement increased by 20%.
          </li>
        </ul>
        <div>
          <button>
            Live Preview <FiArrowUpRight size={15} />
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-row justify-center">
        <img
          src="/images/mobile.png"
          alt="product screenshots"
          className="product"
        />
      </div>
    </div>
  );
}

export default WorkCard;
