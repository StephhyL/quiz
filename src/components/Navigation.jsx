import { useNavigate } from "react-router-dom";

// import Other Components
import Button from "./reuse/Button";

// import styling
import "../stylesheets/css/Navigation.css";

const Navigation = () => {
  const nav = useNavigate();

  return (
    <div className="navigation">
      <div onClick={() => nav("/")}>Logo</div>
      <div className="login-register">
        <Button name="login" />
        <Button name="register" />
      </div>
    </div>
  );
};

export default Navigation;
