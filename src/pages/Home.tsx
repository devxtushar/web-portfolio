// import Slider from "@ant-design/react-slick";

import Works from "./Works";

function Home() {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   showArrows: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   // responsive: [
  //   //   {
  //   //     breakpoint: 1024,
  //   //     settings: {
  //   //       slidesToShow: 3,
  //   //       slidesToScroll: 3,
  //   //       infinite: true,
  //   //       dots: true,
  //   //     },
  //   //   },
  //   //   {
  //   //     breakpoint: 600,
  //   //     settings: {
  //   //       slidesToShow: 2,
  //   //       slidesToScroll: 2,
  //   //     },
  //   //   },
  //   //   {
  //   //     breakpoint: 480,
  //   //     settings: {
  //   //       slidesToShow: 1,
  //   //       slidesToScroll: 1,
  //   //     },
  //   //   },
  //   // ],
  // };
  return (
    <main>
      <section>
        <div>
          <button>Available for opportunities</button>
        </div>
        <div>
          <h1>
            Welcome to <br />
            my digital humble abode
          </h1>
          <h4>
            I'm a Software Engineer.
            <br />
            My interest lies in software development, problem solving.
          </h4>
        </div>
        <div className="flex gap-5">
          <button>Let's talk</button>
          <button>Get Template</button>
        </div>
        {/* <div>
          <Slider {...settings}>
            <div>
              <h3 className="p-10  bg-slate-500">1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div> */}
      </section>
      <Works />
    </main>
  );
}

export default Home;
