import React, { useState } from "react";
import "./Login.css";
import { BsGoogle, BsFacebook } from "react-icons/bs";
import {useNavigate } from "react-router";
import { hi } from "date-fns/locale";
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
    <>
    {hideModal ? (
      <LoginItem  handleHideModal = {handleHideModal} handleModal={handleModal}/>
    ) : ""}

  
    </>
  );
};

export default Login;
