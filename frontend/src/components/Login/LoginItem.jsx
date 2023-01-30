import React from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import InputDynamic from "./InputDynamic";
import { Link } from "react-router-dom";
import "./Login.css";

export default function LoginItem({ handleHideModal, handleModal }) {
  return (
    <>
      <div className="Login" onClick={handleHideModal}></div>
        <div className="Login-form">
        <div className="Login-form-container">
          <h1 className="Login-title">Log in or sign up</h1>
          <div className="line-1"></div>
          <h1 className="welcome"> Welcome </h1>
          <form onSubmit={handleModal}>
            <div className="Login-form-group">
              <InputDynamic
                type="email"
                name="email"
                id="email"
                placeholder="email@example.com"
              />
              <InputDynamic
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <button className="Login-form-button">Log in</button>

            <div className="Login-form-group">
              <p className="Login-form-text">Don't have an account? <Link to="/signup">Signup</Link></p>
            </div>
            <div className="or">
              <div className="line-2"></div>
              <span>or</span>
              <div className="line-2"></div>
            </div>
            <div className="google__facebook">
              <button className="Login-form-continue">
                <BsGoogle className="google" />
                Continue with Google
              </button>
              <button className="Login-form-continue">
                <BsFacebook className="facebook" />
                Continue with Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
