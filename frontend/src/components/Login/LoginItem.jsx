import React, { useContext, useEffect, useState } from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/context/authContext";

export default function LoginItem({ handleHideModal, handleModal }) {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(input);
    navigate("/");
  };
  useEffect(() => {
    if (!login) {
      handleHideModal();
    }
  }, [login]);

  return (
    <>
      <div className="Login" onClick={handleHideModal}></div>
      <div className="Login-form">
        <div className="Login-form-container">
          <h1 className="Login-title">Log in or sign up</h1>
          <div className="line-1"></div>
          <h1 className="welcome"> Welcome </h1>
          <form onSubmit={handleSubmit} action="javascript:void(0)">
            <div className="Login-form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                required
                className="Login-form-input"
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                className="Login-form-input"
                onChange={handleInputChange}
              />
              {login && <p className="error">{login}</p>}
            </div>
            <input type={'submit'} className="Login-form-button">
              Log in
            </input>

            <div className="Login-form-group">
              <p className="Login-form-text">
                Don't have an account? <Link to="/signup">SignUp</Link>
              </p>
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
