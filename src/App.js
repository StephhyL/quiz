// import react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import other components
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Quiz from "./components/quiz/Quiz";
import NewQuestion from "./components/NewQuestion";

// import styling
import "../src/stylesheets/css/App.css";
import ThankYou from "./components/ThankYou";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/new-question" element={<NewQuestion />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
