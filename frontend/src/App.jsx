import React from "react";
import { Navbar } from "./components";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
