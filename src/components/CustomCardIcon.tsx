function CustomCardIcon(props: { name: string }) {
  return (
    <div className="custom_card__icon">
      <div className="custom_card__iconbg">
        <h4 className="font-sans font-semibold">{props.name}</h4>
      </div>
    </div>
  );
}

export default CustomCardIcon;
