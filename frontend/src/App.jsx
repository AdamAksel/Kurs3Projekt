import React from "react";
import { Navbar } from "./components";
import { Outlet } from "react-router";

function App() {
  return (
    <>
    <header className="header_app">
      <Navbar />
      </header>
      <main className="main_app">
      <Outlet />
      </main>
    </>
  );
}

export default App;
