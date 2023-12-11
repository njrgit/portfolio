import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import LandingPage from "./Components/LandingPage/LandingPage";
import App from "./App";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import AboutMe from "./Components/AboutMe/AboutMe";
import CareerPage from "./Components/CareerPage/CareerPage";
import ProjectsPage from "./Components/ProjectsPage/ProjectsPage";
import ContactMe from "./Components/ContactMePage/ContactMe";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/AboutMe",
        element: <AboutMe />,
      },
      {
        path: "/Career",
        element: <CareerPage />,
      },
      {
        path: "/Projects",
        element: <ProjectsPage />,
      },
      {
        path: "/Contact",
        element: <ContactMe />,
      }
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
