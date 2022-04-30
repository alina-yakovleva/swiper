import "./index.css";

const Button = ({ onClick, label, icon }) => {
  const btnClasses = ["button"];

  if (icon) {
    btnClasses.push("button_with-icon");
  }

  return (
    <button onClick={onClick} className={btnClasses.join(" ")}>
      {icon && <div className="button__icon-container">{icon}</div>}
      <div>{label}</div>
    </button>
  );
};

export default Button;
