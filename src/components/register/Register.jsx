import React from "react";
import "./register.css";

export default function Register() {
  return (
    <div className="register-container">
      <div className="register-form">
        <form>
          <h2>Register Here</h2>
          <div className="input-group">
            <input type="text" placeholder="Enter Username" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Enter Password" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Enter Confrem Password" />
          </div>
          <div className="input-group">
            <input type="number" placeholder="Enter Mobile" />
          </div>
          <button className="register-button">Submit</button>
        </form>
      </div>
    </div>
  );
}
