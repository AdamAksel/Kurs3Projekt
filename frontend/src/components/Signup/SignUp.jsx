import React, { useContext, useEffect, useState } from "react";
import InputDynamic from "../Login/InputDynamic";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export default function SignUp() {
  const [isOpened, setIsOpened] = useState(false);

  const navigate = useNavigate();

  const [confirmPassword, setConfirmPassword] = useState("");
  const {register} = useContext(AuthContext)

  const [input, setInput] = useState({
    email: " ",
    password: " ",
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  };

  console.log(confirmPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input.password !== confirmPassword) {
      alert("Passwords do not match");
    } else if (input == " ") {
      alert("Please enter all fields");
    } else {
      try {
        await register(input);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };



  return (
    !isOpened && (
      <div className="signup_container">
        <div className="signup_container_form">
          <div className="signup_container_form_fields">
            <img
              className="signup_container_form_logo_title"
              src="./logo.svg"
            />
            <h1>Create Your Account</h1>
            <div className="signup_container_form_group">
              <div className="signup_first_last_name">
                <input
                  type="text"
                  name="F_name"
                  id="first_name"
                  placeholder="First name"
                  onChange={handleInputChange}
                  required
                />

                <input
                  type="text"
                  name="L_name"
                  id="last_name"
                  placeholder="Last name"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="signup_email_password">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                  onChange={handleInputChange}
                  required
                />
                <p className="signup_container_form_group_password">
                  You'll need to confirm your email address before you can sign
                  in.
                </p>

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={handleInputChange}
                  required
                />

                <input
                  type="password"
                  name="confirmPassword"
                  id="confirm_password"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <p className="signup_container_form_group_password">
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </p>
                <div className="signup_container_form_group_next">
                  <Link className="link" to="/login">
                    <span className="login_link"> Log in instead</span>
                  </Link>
                  <button
                    type="submit"
                    name="next"
                    id="next"
                    onClick={handleSubmit}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="signup_container_form_logo">
            <div className="signup_container_logo">
              <span className="highlight_logo">World</span>
              <br />
              <span className="highlight_logo">of music</span>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
