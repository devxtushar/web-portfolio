function CustomButton(props: { name: string }) {
  return (
    <div className="custom_card__btn">
      <div className="custom_card__btnbg">
        <h4 className="font-sans font-semibold">{props.name}</h4>
      </div>
    </div>
  );
}

export default CustomButton;
