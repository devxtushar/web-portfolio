import CustomTitle from "../components/CustomTitle";
import WorkCard from "../components/WorkCard";
import { customTitleWorks } from "../utils/JSON";

function Works() {
  return (
    <section className="flex flex-col gap-20">
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
