function About() {
  return (
    <section>
      <div className="flex-row gap-10">
        <div className="flex-col gap-5">
          <span>About Me</span>
          <h1>Know who am I</h1>
          <span>My journey in fewwords</span>
          <h5>
            Hello! I’m a results-driven Software Engineer with over 3 years of
            experience designing and developing high-performance applications.
            My expertise spans modern web and mobile technologies, with a focus
            on delivering user-centric solutions that are both scalable and
            robust.I have hands-on experience in developing web and mobile
            applications for platforms like Licious (E-commerce) and
            PhysicsWallah (EdTech), with a strong focus on optimizing user
            experience. Passionate about creating innovative solutions, I excel
            in collaborative environments and am always eager to learn, grow,
            and drive technological advancements.
          </h5>
          <button>Know more {"->"}</button>
        </div>
        <div>{/* <img src="" alt="" /> // user image */}</div>
      </div>
      <div className="beyond">
        <table>
          <tbody>
            <tr>
              <td>Beyond Portfolio</td>
            </tr>
            <tr>
              <td>Tech Stacks</td>
            </tr>
            <tr>
              <td>Location</td>
            </tr>
            <tr>
              <td>Current Project</td>
            </tr>
            <tr>
              <td>Social Accounts</td>
            </tr>
            <tr>
              <td>My Persona</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="experience">
        <span>My experiences</span>
        <h1>Where I've Been Employed</h1>
        <div>
          <div className="flex-row gap-10">
            <div className="flex-col gap-2">
              <span>Product Designer,BetterPlace</span>
              <i>May 2022- Present / Bangalore, India</i>
            </div>
            <div>
              <ul>
                <li>Designed key features for embedding in-platform data.</li>
                <li>Designed key features for embedding in-platform data.</li>
                <li>Designed key features for embedding in-platform data.</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="flex-row gap-10">
            <div className="flex-col gap-2">
              <span>Product Designer,BetterPlace</span>
              <i>May 2022- Present / Bangalore, India</i>
            </div>
            <div>
              <ul>
                <li>Designed key features for embedding in-platform data.</li>
                <li>Designed key features for embedding in-platform data.</li>
                <li>Designed key features for embedding in-platform data.</li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="p-10">
          <div className="flex-col gap-5">
            <h1>Let's Connect and Create Something Amazing!</h1>
            <span>
              React out to me for collaborations, inquiries, or just to say
              hello.
            </span>
          </div>
          <button>Contact Me </button>
        </div>
      </div>
    </section>
  );
}

export default About;
