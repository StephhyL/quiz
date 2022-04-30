// import styling
import "../../stylesheets/css/LabInput.css";

const LabInput = (props) => {
  const { prompt, type, indicator } = props;
  return (
    <div className="lab-input">
      <label for={indicator}>{prompt}</label>
      <div></div>
      <input type={type} id={indicator} name={indicator}></input>
    </div>
  );
};

export default LabInput;
