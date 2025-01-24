import { FiArrowUpRight } from "react-icons/fi";

function Footer() {
  return (
    <footer>
      <hr />
      <div className="flex flex-row flex-wrap justify-between py-10">
        <div>
          <h3 className="text-gray-500 font-sans">
            Created by{" "}
            <a
              href="https://www.linkedin.com/in/devxtushar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              @devxtushar
            </a>
          </h3>
        </div>
        <div>
          <ul className="flex gap-10">
            <li>
              <a
                href="https://www.linkedin.com/in/devxtushar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <button>
                  LinkedIn <FiArrowUpRight size={15} />
                </button>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/devxtushar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <button>
                  Github <FiArrowUpRight size={15} />
                </button>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tusharmishraofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <button>
                  Instagram <FiArrowUpRight size={15} />
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
