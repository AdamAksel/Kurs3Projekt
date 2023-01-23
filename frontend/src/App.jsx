import { Start, Navbar, Calendar } from "./components";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound";
import "./App.css";
import { SpinnerCircular } from "spinners-react";

<SpinnerCircular />;
import {
  Routes,
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  useNavigate,
  Navigate,
} from "react-router-dom";
import React from "react";
import Spinner from "./components/Spinner";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <React.Fragment>
//       <Route path="/" exact element={<Start />} />
//       <Route path="/Calendar" element={<Calendar />} />
//       <Route path="Login" element={<Login />} />
//     </React.Fragment>
//   )
// );

function App() {
  return (
    <div className="container">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/home" exact element={<Start />} />

          <Route path="/Calendar" element={<Calendar />} />

          <Route path="/Login" element={<Login />} />

          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <RouterProvider router={router} /> */}
      </main>
    </div>
  );
}

export default App;
