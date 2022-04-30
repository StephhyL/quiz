import { useNavigate } from "react-router-dom";

// import other components
import LabInput from "./reuse/LabInput";
import Button from "./reuse/Button";

//import styling
import "../stylesheets/css/NewQuestion.css";

const NewQuestion = () => {
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    nav("/thankyou");
  };

  return (
    <form className="new-question" onSubmit={handleSubmit}>
      {/* the for is referring to the id */}
      <LabInput
        prompt="Enter New Question:"
        type="text"
        indicator="user-question"
      />
      <LabInput
        prompt="Enter Correct Anwer:"
        type="text"
        indicator="user-correct-answer"
      />
      <LabInput
        prompt="Enter First Incorrect Option:"
        type="text"
        indicator="user-incorrect-option-a"
      />
      <LabInput
        prompt="Enter Second Incorrect Option:"
        type="text"
        indicator="user-incorrect-option-b"
      />
      <LabInput
        prompt="Enter Third Incorrect Option:"
        type="text"
        indicator="user-incorrect-option-c"
      />
      <Button name="Submit" handleClick={handleSubmit} />
    </form>
  );
};

export default NewQuestion;
