
import { useNavigate } from "react-router-dom";
import "./welcome.css";

export default function Welcome() {
  const nav = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-bottom">
        {/* Heading & Paragraph */}
        <div className="welcome-header">
          <h1>Welcome to PopX</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>

        {/* Buttons */}
        <div className="welcome-buttons">
          <button
            className="welcome-btn primary"
            onClick={() => nav("/register")}
          >
            Create Account
          </button>
          <button
            className="welcome-btn secondary"
            onClick={() => nav("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
