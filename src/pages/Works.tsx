import CustomTitle from "../components/CustomTitle";
import WorkCard from "../components/WorkCard";
import { customTitleWorks } from "../utils/JSON";

function Works() {
  return (
    <section id="work" className="flex flex-col gap-20 pt-40">
      <CustomTitle items={customTitleWorks} />
      <div className="flex flex-col gap-20 items-center">
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </section>
  );
}

export default Works;
