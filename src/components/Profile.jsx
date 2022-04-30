import { useNavigate } from "react-router-dom";

// import other components
import Button from "./reuse/Button";

// import styling
import "../stylesheets/css/Profile.css";

const Profile = () => {
  const nav = useNavigate();

  return (
    <div className="profile">
      <h1>Welcome Back Stephanie!</h1>
      <div className="profile-nav">
        <div className="start-quiz">
          <Button
            name="Start the Quiz"
            handleClick={() => {
              nav("/quiz");
            }}
          />
        </div>
        <div className="submit-form">
          <Button
            name="Submit a Question"
            handleClick={() => {
              nav("/new-question");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
