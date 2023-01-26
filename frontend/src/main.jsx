import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Start from "./components/Start/Start";
import Event from "./components/Event/Event";
import Login from "./components/Login/Login";
import Calendar from "./components/Calendar/Calendar";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Start />} />
      <Route path="/Calendar" element={<Calendar />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Event/:id" element={<Event />} />
      <Route
          path="/search-results/:date"
          render={(props) => (
            <SearchResults events={events} {...props} />
          )}
        />
        
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
