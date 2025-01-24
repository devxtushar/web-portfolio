import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import CustomButton from "./CustomButton";

function WorkCard(props: any) {
  const {
    projectName,
    startYear,
    title,
    description,
    images,
    liveUrl,
    techStack,
  } = props.items;

  return (
    <div className="flex flex-wrap gap-20 card">
      <div className="flex-2 flex flex-col gap-10 overflow-auto">
        <div className="flex flex-col gap-2">
          <span className="t4 uppercase font-mono tracking-widest">
            {projectName} . {startYear}
          </span>
          <h1 className="font-serif">{title}</h1>
        </div>
        <div className="flex flex-row gap-5">
          {techStack.map((items: { name: string }, i: number) => {
            const { name } = items;
            return <CustomButton key={i} name={name} />;
          })}
        </div>
        <hr />
        <ul className="flex flex-col gap-2">
          {description.map((items: { points: string }, i: number) => {
            const { points } = items;
            return (
              <li
                key={i}
                className="t3 font-sans flex flex-row gap-4 items-center"
              >
                <AiOutlineCheckCircle /> {points}
              </li>
            );
          })}
        </ul>
        <div className="flex-1 flex items-end pb-10">
          <a href={liveUrl} target="_blank">
            <button>
              Live Preview <FiArrowUpRight size={15} />
            </button>
          </a>
        </div>
      </div>
      <div className="flex-1 flex  justify-end">
        <img
          src={images[0].url}
          alt="product screenshots"
          className="product"
        />
      </div>
    </div>
  );
}

export default WorkCard;
