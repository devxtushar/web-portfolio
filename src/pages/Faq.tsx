function Faq() {
  return (
    <section>
      <div>
        <span>Some Doubts</span>
        <h1>Frequently Asked Questions</h1>
        <span>Your answers await right there</span>
      </div>
      <div className="flex-row gap-10">
        <div>
          <h2>Have any more questions or want to start collaborating? </h2>
          {/* <img src="" alt="" /> // user image */}
          <div>
            <button>Let's talk</button>
            <span>*Response time is typically around 24 hours</span>
          </div>
        </div>
        <div className="flex-col gap-5">
          <div>
            <div>
              <h3>Are you available to hire full time?</h3>
              {/* // icon */}
            </div>
            <h4>
              At the moment, I'm pretty happy where I am, Currently I am not At
              the moment, I'm pretty happy where I am, Currently I am notAt the
              moment, I'm pretty happy where I am, Currently I am not At the
              moment, I'm pretty happy where I am, Currently I am not At the
              moment, I'm pretty happy where I am, Currently I am not At the
              moment, I'm pretty happy where I am, Currently I am not Happy to
              connect on socials.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
