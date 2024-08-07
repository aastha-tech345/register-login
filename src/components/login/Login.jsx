import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navi = useNavigate();
  const RegisterPage = () => {
    navi("/register");
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <form>
          <h2>login Here</h2>
          <div className="input-group">
            <input type="text" placeholder="Enter Username" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Enter Password" />
          </div>
          <div style={{ textAlign: "end" }}>
            <button className="login-button">Login</button>
            <button className="login-button" onClick={RegisterPage}>
              Sign-In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
