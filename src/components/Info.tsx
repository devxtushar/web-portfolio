import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineEnvironment } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { PiHandWavingBold } from "react-icons/pi";
import { Link } from "react-router-dom";

function Info() {
  return (
    <div className="flex-1 info p-10">
      <div className="mb-10 text-center">
        <h1 className="font-serif">
          Have any more questions or want to discuss on project?
        </h1>
      </div>
      <div className="flex flex-row gap-10 justify-between info_inside">
        <div className="relative">
          <img
            src="../images/tusharpic01.webp"
            alt="devxtushar image"
            className="profile"
          />
          <div className="flex flex-col gap-2 items-center btn_posi">
            <Link to="/contact">
              <button>
                <PiHandWavingBold size={18} /> Let's talk
              </button>
            </Link>
            <span className="t6 font-bold text-black font-sans">
              *Response time is typically around 24h
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-5 justify-between">
          <ul className="flex flex-col gap-5">
            <li className="text-gray-500 flex gap-5 items-center">
              <span>
                <AiOutlineEnvironment size={18} />
              </span>

              <span className="t3">Kanpur, Uttar Pradesh, India (208021)</span>
            </li>
            <li className="text-gray-500 flex gap-5 items-center">
              <span>
                <IoCallOutline size={18} />
              </span>
              <span className="t3">+91 9149327618</span>
            </li>
            <li className="text-gray-500 flex gap-5 items-center">
              <span>
                <AiOutlineMail size={18} />
              </span>
              <span className="t3">devxtushar@gmail.com</span>
            </li>
          </ul>
          <h3 className="t2 font-serif ">Social Handle :</h3>

          <ul className="flex flex-row gap-10">
            <li>
              <a
                href="https://www.linkedin.com/in/devxtushar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <AiOutlineLinkedin size={45} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/devxtushar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <AiOutlineGithub size={45} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tusharmishraofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <AiOutlineInstagram size={45} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Info;
