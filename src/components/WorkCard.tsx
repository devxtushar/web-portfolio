import { AiOutlineCheckCircle } from "react-icons/ai";
import CustomButton from "./CustomButton";
import Slider from "@ant-design/react-slick";

function WorkCard(props: any) {
  const { projectName, startYear, title, description, images, techStack } =
    props.items;

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 200,
    autoplay: true,
    slidesToShow: window.innerWidth < 410 ? 2 : 3,
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
    <div className="flex flex-wrap gap-10 card project_space">
      <section
        className="flex-1 flex flex-col gap-20 product_des__section"
        style={{ width: "100%", maxWidth: 750, minWidth: 360 }}
      >
        <div className="flex flex-col gap-2">
          <span className="t4 uppercase font-mono tracking-widest">
            {projectName} . {startYear}
          </span>
          <h1 className="font-serif">{title}</h1>
        </div>
        <hr />
        <ul className="flex flex-col gap-10">
          {description.map((items: { points: string }, i: number) => {
            const { points } = items;
            return (
              <li key={i} className="t3 font-sans flex flex-row gap-4 ">
                <AiOutlineCheckCircle className="mt-2" /> {points}
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
        <div className="flex-1 flex items-end pb-10 center_section">
          {/* <a href={liveUrl} target="_blank">
            <button>
              Live Preview <FiArrowUpRight size={15} />
            </button>
          </a> */}
        </div>
      </section>
      <section className="flex-1 flex justify-end center_section">
        <div
          style={{
            width: "100%",
            maxWidth: 360,
            minWidth: 300,
          }}
          className="prod_images__section"
        >
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
      </section>
    </div>
  );
}

export default WorkCard;
