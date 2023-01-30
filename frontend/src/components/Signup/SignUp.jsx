import React, { useState } from "react";
import InputDynamic from "../Login/InputDynamic";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
const [isOpened, setIsOpened] = useState(false);

const navigate = useNavigate();

const handleHideModal = () => {
  setIsOpened(!isOpened);
  return navigate("/");
};

  return ( !isOpened &&  <div className="signup_container"  >
      <div className="signup_container_form">
        <div className="signup_container_form_fields">
          <img className="signup_container_form_logo_title" src="./logo.svg" /> 
          <h1>Create Your Account</h1>
          <div className="signup_container_form_group">
            <div className="signup_first_last_name">
              <InputDynamic
                type="text"
                name="FirstName"
                id="first_name"
                placeholder="First name"
              />
              <InputDynamic
                type="text"
                name="LastName"
                id="last_name"
                placeholder="Last name"
              />
            </div>
            
            <div className="signup_email_password">
              <InputDynamic
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
              />
              <p className="signup_container_form_group_password">
                You'll need to confirm your email address before you can sign
                in.
              </p>
              <InputDynamic
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <InputDynamic
                type="password"
                name="password"
                id="confirm_password"
                placeholder="Confirm Password"
              />
              <p className="signup_container_form_group_password">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>
              <div className="signup_container_form_group_next">
                <Link className="link" to="/login">
                  <span className="login_link"> Log in instead</span>
                </Link>
                <button type="submit" name="next" id="next">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        <span className="close" onClick={handleHideModal}>x</span>
        <div className="signup_container_form_logo">
        
          <div className="signup_container_logo">
          <span className="highlight_logo">World</span>
          <br />
          <span className="highlight_logo" >of music</span>
          </div>
        </div>
      </div>
    </div>
  );
}
