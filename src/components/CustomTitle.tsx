import { CustomTitleProps } from "../interfaces/common";

function CustomTitle(props: CustomTitleProps) {
  const { heading, title, subtitle } = props.items;
  return (
    <div className="flex-col gap-5 items-center">
      <span>{heading}</span>
      <h1>{title}</h1>
      <span>{subtitle}</span>
    </div>
  );
}

export default CustomTitle;
