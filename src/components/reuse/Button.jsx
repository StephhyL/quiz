// import styling
import "../../stylesheets/css/Button.css";

const Button = (props) => {
  const { name, handleClick } = props;
  return (
    <button type="button" className="btn btn-primary" onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
