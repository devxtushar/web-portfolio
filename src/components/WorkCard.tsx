import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import CustomButton from "./CustomButton";
import Slider from "@ant-design/react-slick";

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

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 200,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  var settingsImage = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 200,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-wrap gap-20 card project_space">
      <div
        className="flex-1 flex flex-col gap-10 "
        style={{ width: "100%", maxWidth: 600, minWidth: 250 }}
      >
        <div className="flex flex-col gap-2">
          <span className="t4 uppercase font-mono tracking-widest">
            {projectName} . {startYear}
          </span>
          <h1 className="font-serif">{title}</h1>
        </div>

        <hr />
        <ul className="flex flex-col gap-2">
          {description.map((items: { points: string }, i: number) => {
            const { points } = items;
            return (
              <li key={i} className="t3 font-sans flex flex-row gap-4 ">
                <AiOutlineCheckCircle className="mt-2.5" /> {points}
              </li>
            );
          })}
        </ul>
        <div>
          <Slider {...settings}>
            {techStack.map((items: { name: string }, i: number) => {
              const { name } = items;
              return <CustomButton key={i} name={name} />;
            })}
          </Slider>
        </div>
        <div className="flex-1 flex items-end pb-10">
          <a href={liveUrl} target="_blank">
            <button>
              Live Preview <FiArrowUpRight size={15} />
            </button>
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <div style={{ width: "100%", maxWidth: 370, minWidth: 250 }}>
          <Slider {...settingsImage}>
            {images.map((items: { url: string }, i: number) => {
              const { url } = items;
              return (
                <img
                  key={i}
                  src={url}
                  alt="product screenshots"
                  className="product"
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
