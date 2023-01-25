import React, { useState } from "react";
import "./Login.css";
import {useNavigate } from "react-router";
import LoginItem from "./LoginItem";

const Login = () => {
  const [hideModal, setHideModal] = useState(true);

  const navigate = useNavigate();

  const handleModal = (e) => {
    e.preventDefault();
    setHideModal(!hideModal);
  };

  const handleHideModal = () => {
    setHideModal(!hideModal);
    return navigate("/");
  };

  return (
    <div className="login_container">
    {hideModal ? (
      <LoginItem  handleHideModal = {handleHideModal} handleModal={handleModal}/>
    ) : ""}

  
    </div>
  );
};

export default Login;
