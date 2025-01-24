import CustomTitle from "../components/CustomTitle";
import WorkCard from "../components/WorkCard";
import { customTitleWorks, workProjectsJson } from "../utils/JSON";

function Works() {
  return (
    <section id="work" className="flex flex-col gap-20 pt-40">
      <CustomTitle items={customTitleWorks} />
      <div className="flex flex-col gap-20 items-center">
        {workProjectsJson.map((items, i) => {
          return <WorkCard items={items} key={i} />;
        })}
      </div>
    </section>
  );
}

export default Works;
