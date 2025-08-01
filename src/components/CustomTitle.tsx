import { CustomTitleProps } from "../interfaces/HomeInterface";

function CustomTitle(props: CustomTitleProps) {
  const { heading, title, subtitle } = props.items;
  return (
    <div className="flex flex-col gap-2 items-center">
      <span className="t3 uppercase font-mono tracking-widest">{heading}</span>
      <h1 className="font-serif">{title}</h1>
      <span className="t3">{subtitle}</span>
    </div>
  );
}

export default CustomTitle;
